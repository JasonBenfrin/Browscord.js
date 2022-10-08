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
import zlib from 'zlib'

class Client extends EventTarget {

  public identifyOptions: GatewayIdentifyData
  public socketURLOptions: GatewayURLQuery
  public declare ws: WebSocket

  private _baseUrl: string = 'wss://gateway.discord.gg'
  private declare inflator: zlib.Inflate

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
      this.inflator = zlib.createInflate()
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
    if (this.socketURLOptions.compress == 'zlib-stream') {
      let buffer = []

      this.inflator.on('data', chunk => {
        buffer = buffer.concat(Array.from(chunk))
        try {
          const encoded = this.socketURLOptions.encoding == 'json' ? new TextDecoder().decode(Uint8Array.from(buffer)) : Uint8Array.from(buffer)
          this._unpack(encoded)
          this._payloadHandler(null, null, encoded)
          buffer = []
        } catch { return }
      })
    }
    this.ws.onmessage = async (e: MessageEvent) => {
      this.dispatchEvent(new CustomEvent('rawData', {detail: e.data}))
      let uint8 : Uint8Array
      if (e.data instanceof Blob) uint8 = new Uint8Array(await e.data.arrayBuffer())

      
      if (this.socketURLOptions.compress == 'zlib-stream') {
        this.inflator.write(uint8)        
      } else {
        this._payloadHandler(e, uint8)
      }
    }

    this.ws.onerror = (e) => {
      console.log(e)
    }

    return this
  }

  private _payloadHandler(e?: any, uint8?: Uint8Array, data? : Uint8Array | string) {
    if (!data) {
      if (this.socketURLOptions.encoding == 'json') {
        if (e.data instanceof Blob && uint8[0] == 120) data = inflate(uint8, { to: 'string' })
        else data = e.data
      } else {
        data = uint8
      }
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

  protected declare _pack: Function
  protected declare _unpack: Function
}

//TODO: I don't know shards
//TODO: validate user inputs
//TODO: throw error when two compress methods are used
export { Client }