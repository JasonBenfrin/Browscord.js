"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v10_1 = require("discord-api-types/v10");
const Options_1 = require("../util/Options");
const dispatch_1 = __importDefault(require("./gateway/receive/dispatch"));
const heartbeat_1 = __importDefault(require("./gateway/receive/heartbeat"));
const heartbeatAck_1 = __importDefault(require("./gateway/receive/heartbeatAck"));
const hello_1 = __importDefault(require("./gateway/receive/hello"));
const invalidSession_1 = __importDefault(require("./gateway/receive/invalidSession"));
const reconnect_1 = __importDefault(require("./gateway/receive/reconnect"));
const resume_1 = __importDefault(require("./gateway/send/resume"));
const etf_js_1 = require("@browscord/etf.js");
const pako_1 = require("pako");
const zlib_1 = __importDefault(require("zlib"));
const axios_1 = __importDefault(require("axios"));
class Client extends EventTarget {
    constructor({ identifyOptions = Options_1.defaultIdentifyOption, socketURLOptions = Options_1.defaultSocketURLOption, useRest = false, shardId, shardCount = 1 }) {
        super();
        this._baseURL = 'https://discord.com/api/v10';
        this._gatewayURL = 'wss://gateway.discord.gg';
        this._sequenceNumber = null;
        this._resuming = false;
        this.identifyOptions = { ...Options_1.defaultIdentifyOption, ...identifyOptions };
        this.socketURLOptions = { ...Options_1.defaultSocketURLOption, ...socketURLOptions };
        this._useRest = useRest;
        this._axios = axios_1.default.create({
            baseURL: this._baseURL,
            headers: {
                'Authorization': `Bot ${identifyOptions.token}`
            }
        });
        this._pack = socketURLOptions.encoding == 'etf' ? etf_js_1.pack : JSON.stringify;
        this._unpack = socketURLOptions.encoding == 'etf' ? etf_js_1.unpack : JSON.parse;
        this._shardId = shardId;
        this._shardCount = shardCount;
        if (this.socketURLOptions.compress) {
            this.inflator = zlib_1.default.createInflate();
        }
    }
    static calculateIntents(...intents) {
        return intents.reduce((prev, curr) => prev + curr, 0);
    }
    _urlConstructor(base, parameters) {
        base += '/?';
        Object.entries(parameters).forEach(([key, value]) => {
            base += `${key}=${value}&`;
        });
        return base.slice(0, -1);
    }
    // TODO: Organize Errors
    async login(token = this.identifyOptions.token) {
        if (this._useRest) {
            const gateway = await axios_1.default.get(v10_1.Routes.gatewayBot());
            this._gatewayURL = gateway.url;
        }
        if (this._shardId) {
            this.identifyOptions.shard = [this._shardId, this._shardCount];
        }
        this.identifyOptions.token = token;
        this.ws = new WebSocket(this._urlConstructor(this._gatewayURL, this.socketURLOptions));
        this.ws.onopen = this._onOpen.bind(this);
        if (this.socketURLOptions.compress == 'zlib-stream') {
            let buffer = [];
            this.inflator.on('data', chunk => {
                buffer = buffer.concat(Array.from(chunk));
                try {
                    const encoded = this.socketURLOptions.encoding == 'json' ? new TextDecoder().decode(Uint8Array.from(buffer)) : Uint8Array.from(buffer);
                    this._unpack(encoded);
                    this._payloadHandler(undefined, undefined, encoded);
                    buffer = [];
                }
                catch {
                    return;
                }
            });
        }
        return this;
    }
    _onOpen() {
        const websocketSend = this.ws.send.bind(this.ws);
        this.ws.send = (data) => {
            this.dispatchEvent(new CustomEvent('rawSendData', { detail: data }));
            this.dispatchEvent(new CustomEvent('rawSend', { detail: this._unpack(data) }));
            websocketSend(data);
        };
        this.ws.onmessage = this._onMessage.bind(this);
        this.ws.onerror = this._onError.bind(this);
        this.ws.onclose = this._onClose.bind(this);
    }
    async _onMessage(e) {
        this.dispatchEvent(new CustomEvent('rawData', { detail: e.data }));
        const uint8 = new Uint8Array(await e.data.arrayBuffer());
        if (this.socketURLOptions.compress == 'zlib-stream') {
            this.inflator.write(uint8);
        }
        else {
            this._payloadHandler(e, uint8);
        }
    }
    _onError(e) {
        console.log(e);
    }
    _onClose(e) {
        this.dispatchEvent(new CustomEvent('disconnect', { detail: e }));
        if (!e.code || e.code == 4004 || 4010 <= e.code && e.code <= 4014 || e.code < 4000)
            return this.dispatchEvent(new CustomEvent('end', { detail: e }));
        this._resuming = true;
        this.ws = new WebSocket(this._urlConstructor(this._resumeGatewayURL || this._gatewayURL, this.socketURLOptions));
        this.ws.onopen = this._onOpen.bind(this);
    }
    _payloadHandler(e, uint8, data) {
        if (!data) {
            if (e && this.socketURLOptions.encoding == 'json') {
                if (uint8 && e.data instanceof Blob && uint8[0] == 120)
                    data = (0, pako_1.inflate)(uint8, { to: 'string' });
                else if (typeof e.data == 'string')
                    data = e.data;
            }
            else {
                data = uint8;
            }
        }
        const payload = 
        // To make bigints to string, stringify and parse
        JSON.parse(JSON.stringify(this._unpack(data), (_, value) => {
            if (typeof value != 'bigint')
                return value;
            const int = parseInt(value.toString());
            return Number.isSafeInteger(int) ? int : value.toString();
        }));
        this.dispatchEvent(new CustomEvent('raw', { detail: payload }));
        if (this._resuming) {
            this._resuming = false;
            return resume_1.default.call(this);
        }
        if (payload.s)
            this._sequenceNumber = payload.s;
        switch (payload.op) {
            case v10_1.GatewayOpcodes.Dispatch:
                dispatch_1.default.call(this, payload);
                break;
            case v10_1.GatewayOpcodes.Heartbeat:
                heartbeat_1.default.call(this, payload);
                break;
            case v10_1.GatewayOpcodes.Reconnect:
                reconnect_1.default.call(this, payload);
                break;
            case v10_1.GatewayOpcodes.InvalidSession:
                invalidSession_1.default.call(this, payload);
                break;
            case v10_1.GatewayOpcodes.Hello:
                hello_1.default.call(this, payload);
                break;
            case v10_1.GatewayOpcodes.HeartbeatAck:
                heartbeatAck_1.default.call(this);
                break;
        }
    }
}
exports.default = Client;
//TODO: I don't know shards
//TODO: validate user inputs
