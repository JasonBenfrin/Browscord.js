import { GatewayIdentifyData, GatewayReceivePayload, GatewayOpcodes } from "discord-api-types/v10"
import platform from "platform"
import { defaultIdentifyOption, defaultSocketURLOption } from "../util/Options"
import dispatchReceive from "./gateway/receive/dispatch"
import heartbeatReceive from "./gateway/receive/heartbeat"
import heartbeatAckReceive from "./gateway/receive/heartbeatAck"
import helloReceive from "./gateway/receive/hello"
import invalidSessionReceive from "./gateway/receive/invalidSession"
import reconnectReceive from "./gateway/receive/reconnect"

interface SocketURLOptions {
  v: number | string,
  encoding: string,
  compress?: string
}

class Client extends EventTarget {

  /**
   * The options to be sent when identifying
   * @property {GatewayIdentifyData}
   */
  identifyOptions: GatewayIdentifyData

  /**
   * Websocket URL search parameters
   * @property {SocketURLOptions}
   */
  socketURLOptions: SocketURLOptions

  /**
   * The websocket URL that the client will connect to
   * @property {string}
   * @private
   */
  _baseUrl: string = 'wss://gateway.discord.gg'

  /**
   * Websocket of the client
   * @property {WebSocket}
   */
  declare ws: WebSocket

  /**
   * Heartbeat timeout id
   * @property {number}
   * @private
   */
  declare _heartbeatTimeout: ReturnType<typeof setTimeout>

  /**
   * Heartbeat Interval received by Hello
   * @property {number}
   * @private
   */
  declare _heartbeatInterval: number

  _sequenceNumber: number | null = null

  /**
   * The constructor of this client
   * @param {GatewayIdentifyData} identifyOptions
   * @param {SocketURLOptions} socketURLOptions
   */
  constructor(
    identifyOptions: GatewayIdentifyData = defaultIdentifyOption,
    socketURLOptions : SocketURLOptions = defaultSocketURLOption
  ) {
    super()
    this.identifyOptions = {...defaultIdentifyOption, ...identifyOptions}
    this.socketURLOptions = {...defaultSocketURLOption, ...socketURLOptions}
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

    this.ws.onmessage = (e: MessageEvent) => {
      const payload : GatewayReceivePayload = this._unpack(e.data)
      this.dispatchEvent(new CustomEvent('raw', { detail: payload }))
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

  _pack = JSON.stringify

  _unpack = JSON.parse
}

//TODO: I don't know shards
//TODO: validate user inputs
//TODO: add support for etf encoding and other suppressions
export { Client, SocketURLOptions }