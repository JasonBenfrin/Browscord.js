import { GatewayIdentifyData, GatewayReceivePayload, GatewayOpcodes, GatewayURLQuery, GatewayIntentBits, Routes, APIGatewayBotInfo } from "discord-api-types/v10"
import { ClientOptions, defaultIdentifyOption, defaultSocketURLOption } from "../util/Options"
import dispatchReceive from "./gateway/receive/dispatch"
import heartbeatReceive from "./gateway/receive/heartbeat"
import heartbeatAckReceive from "./gateway/receive/heartbeatAck"
import helloReceive from "./gateway/receive/hello"
import invalidSessionReceive from "./gateway/receive/invalidSession"
import reconnectReceive from "./gateway/receive/reconnect"
import resumeSend from "./gateway/send/resume"
import { pack, unpack } from "@browscord/etf.js"
import { inflate } from "pako"
import zlib from 'zlib'
import axios, { AxiosInstance } from "axios"

export default class Client extends EventTarget {

  public identifyOptions: GatewayIdentifyData
  public socketURLOptions: GatewayURLQuery
  public declare ws: WebSocket

  private declare inflator: zlib.Inflate

  protected _baseURL: string = 'https://discord.com/api/v10'
  protected _gatewayURL: string = 'wss://gateway.discord.gg'
  protected declare _sessionId: string
  protected declare _resumeGatewayURL: string
  protected declare _heartbeatTimeout: ReturnType<typeof setTimeout>
  protected declare _heartbeatInterval: number
  protected _sequenceNumber: number | null = null
  protected _resuming: boolean = false
  protected _useRest: boolean
  protected _axios: AxiosInstance
  private _shardId?: number
  private _shardCount: number
  constructor({
    identifyOptions = defaultIdentifyOption,
    socketURLOptions = defaultSocketURLOption,
    useRest = false,
    shardId,
    shardCount = 1
  }: ClientOptions ) {
    super()
    this.identifyOptions = {...defaultIdentifyOption, ...identifyOptions}
    this.socketURLOptions = {...defaultSocketURLOption, ...socketURLOptions}
    this._useRest = useRest
    this._axios = axios.create({
      baseURL: this._baseURL,
      headers: {
        'Authorization': `Bot ${identifyOptions.token}`
      }
    })
    this._pack = socketURLOptions.encoding == 'etf' ? pack : JSON.stringify
    this._unpack = socketURLOptions.encoding == 'etf' ? unpack : JSON.parse
    this._shardId = shardId
    this._shardCount = shardCount
    if (this.socketURLOptions.compress) {
      this.inflator = zlib.createInflate()
    }
  }

  static calculateIntents(...intents: GatewayIntentBits[]): number {
    return intents.reduce((prev, curr) => prev + curr, 0)
  }

  private _urlConstructor(base: string, parameters: GatewayURLQuery) : string {
    base += '/?'
    Object.entries(parameters).forEach(([key, value]) => {
      base += `${key}=${value}&`
    })
    return base.slice(0, -1)
  }

  // TODO: Organize Errors
  async login(token : string = this.identifyOptions.token): Promise<Client> {
    if (this._useRest) {
      const gateway: APIGatewayBotInfo = await axios.get(Routes.gatewayBot())
      this._gatewayURL = gateway.url
    }

    if (this._shardId) {
      this.identifyOptions.shard = [ this._shardId, this._shardCount ]
    }

    this.identifyOptions.token = token
    
    this.ws = new WebSocket(this._urlConstructor(this._gatewayURL, this.socketURLOptions))
    this.ws.onopen = this._onOpen.bind(this)
    if (this.socketURLOptions.compress == 'zlib-stream') {
      let buffer: any[] = []

      this.inflator.on('data', chunk => {
        buffer = buffer.concat(Array.from(chunk))
        try {
          const encoded = this.socketURLOptions.encoding == 'json' ? new TextDecoder().decode(Uint8Array.from(buffer)) : Uint8Array.from(buffer)
          this._unpack(encoded)
          this._payloadHandler(undefined, undefined, encoded)
          buffer = []
        } catch { return }
      })
    }

    return this
  }

  private _onOpen (this: Client) {
    const websocketSend = this.ws.send.bind(this.ws)
    this.ws.send = (data) => {
      this.dispatchEvent(new CustomEvent('rawSendData', {detail: data}))
      this.dispatchEvent(new CustomEvent('rawSend', {detail: this._unpack(data)}))
      websocketSend(data)
    }
    this.ws.onmessage = this._onMessage.bind(this)
    this.ws.onerror = this._onError.bind(this)
    this.ws.onclose = this._onClose.bind(this)
  }

  private async _onMessage (e: MessageEvent<Blob>) {
    this.dispatchEvent(new CustomEvent('rawData', {detail: e.data}))
    const uint8 = new Uint8Array(await e.data.arrayBuffer())

    if (this.socketURLOptions.compress == 'zlib-stream') {
      this.inflator.write(uint8)        
    } else {
      this._payloadHandler(e, uint8)
    }
  }

  private _onError (e: any) {
    console.log(e)
  }

  private _onClose (e: { code: number }) {
    this.dispatchEvent(new CustomEvent('disconnect', { detail: e }))
    if (!e.code || e.code == 4004 || 4010 <= e.code && e.code <= 4014 || e.code < 4000) return this.dispatchEvent(new CustomEvent('end', {detail: e}))
    this._resuming = true
    this.ws = new WebSocket(this._urlConstructor(this._resumeGatewayURL || this._gatewayURL, this.socketURLOptions))
    this.ws.onopen = this._onOpen.bind(this)
  } 

  private _payloadHandler(e?: MessageEvent<Blob | string>, uint8?: Uint8Array, data? : Uint8Array | string) {
    if (!data) {
      if (e && this.socketURLOptions.encoding == 'json') {
        if (uint8 && e.data instanceof Blob && uint8[0] == 120) data = inflate(uint8, { to: 'string' })
        else if (typeof e.data == 'string') data = e.data
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

    if(this._resuming) {
      this._resuming = false
      return resumeSend.call(this)
    }

    if (payload.s) this._sequenceNumber = payload.s
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