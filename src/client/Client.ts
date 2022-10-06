import { GatewayIdentifyData, GatewayReceivePayload, GatewayOpcodes, GatewayURLQuery } from "discord-api-types/v10"
import { defaultIdentifyOption, defaultSocketURLOption } from "../util/Options"
import dispatchReceive from "./gateway/receive/dispatch"
import heartbeatReceive from "./gateway/receive/heartbeat"
import heartbeatAckReceive from "./gateway/receive/heartbeatAck"
import helloReceive from "./gateway/receive/hello"
import invalidSessionReceive from "./gateway/receive/invalidSession"
import reconnectReceive from "./gateway/receive/reconnect"
import { pack, unpack } from "etf.js"
import { inflate } from "pako"

class Client extends EventTarget {

  public identifyOptions: GatewayIdentifyData
  public socketURLOptions: GatewayURLQuery
  public declare ws: WebSocket

  private _baseUrl: string = 'wss://gateway.discord.gg'

  protected declare _sessionId: string
  protected declare _resumeGatewayURL: string
  protected declare _heartbeatTimeout: ReturnType<typeof setTimeout>
  protected declare _heartbeatInterval: number
  protected _sequenceNumber: number | null = null

  constructor(
    identifyOptions: GatewayIdentifyData = defaultIdentifyOption,
    socketURLOptions : GatewayURLQuery = defaultSocketURLOption
  ) {
    super()
    this.identifyOptions = {...defaultIdentifyOption, ...identifyOptions}
    this.socketURLOptions = {...defaultSocketURLOption, ...socketURLOptions}
    this._pack = socketURLOptions.encoding == 'etf' ? pack : JSON.stringify
    this._unpack = socketURLOptions.encoding == 'etf' ? unpack : JSON.parse
    if (this.socketURLOptions.compress) {
      throw 'Zlib-stream transport compression is not supported yet!'
    }
  }

  /**
   * Login with the given credentials
   * @param {string} [token = this.options.token] Token to login
   * @returns {Client} The client
   */
  // TODO: Organize Errors
  async login(token : string = this.identifyOptions.token): Promise<Client> {
    if (!token || token == '') throw 'Invalid token'
    this.identifyOptions.token = token
    
    const parameters = new URLSearchParams()
    Object.entries(this.socketURLOptions).forEach(([key, value] : Array<string>) => {
      parameters.append(key, value)
    })
    
    this.ws = new WebSocket(this._baseUrl+'/?'+parameters.toString())

    this.ws.onmessage = async (e: MessageEvent) => {
      let uint8 : Uint8Array
      if (e.data instanceof Blob) uint8 = new Uint8Array(await e.data.arrayBuffer())

      let data : Uint8Array | string

      if (this.socketURLOptions.encoding == 'json') {
        if (e.data instanceof Blob && uint8[0] == 120) data = inflate(uint8, { to: 'string' })
        else data = e.data
      } else {
        data = uint8
      }

      const payload : GatewayReceivePayload = 
      // To make bigints to string, stringify and parse
      JSON.parse(
        JSON.stringify(
          this._unpack(data),
          (_, value) => {
            if (typeof value != 'bigint') return value
            const int = parseInt(value.toString())
            return Number.isSafeInteger(int) ? int : value.toString()
         }
        )
      )
      this.dispatchEvent(new CustomEvent('raw', { detail: payload }))
      if (payload.t) this._sequenceNumber = payload.s
      switch (payload.op) {
        case GatewayOpcodes.Dispatch:
          dispatchReceive.call(this, payload)
          break;
        case GatewayOpcodes.Heartbeat:
          heartbeatReceive.call(this, payload)
          break;
        case GatewayOpcodes.Reconnect:
          reconnectReceive.call(this, payload)
          break;
        case GatewayOpcodes.InvalidSession:
          invalidSessionReceive.call(this, payload)
          break;
        case GatewayOpcodes.Hello:
          helloReceive.call(this, payload)
          break;
        case GatewayOpcodes.HeartbeatAck:
          heartbeatAckReceive.call(this)
          break;
      }
    } 

    return this
  }

  protected declare _pack: Function
  protected declare _unpack: Function
}

//TODO: I don't know shards
//TODO: validate user inputs
//TODO: throw error when two compress methods are used
export { Client }