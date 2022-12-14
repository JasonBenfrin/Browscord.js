import { GatewayIdentifyData, GatewayURLQuery, GatewayIntentBits } from "discord-api-types/v10";
import { ClientOptions } from "../util/Options";
import { AxiosInstance } from "axios";
export default class Client extends EventTarget {
    identifyOptions: GatewayIdentifyData;
    socketURLOptions: GatewayURLQuery;
    ws: WebSocket;
    private inflator;
    protected _baseURL: string;
    protected _gatewayURL: string;
    protected _sessionId: string;
    protected _resumeGatewayURL: string;
    protected _heartbeatTimeout: ReturnType<typeof setTimeout>;
    protected _heartbeatInterval: number;
    protected _sequenceNumber: number | null;
    protected _resuming: boolean;
    protected _useRest: boolean;
    protected _axios: AxiosInstance;
    private _shardId?;
    private _shardCount;
    constructor({ identifyOptions, socketURLOptions, useRest, shardId, shardCount }: ClientOptions);
    static calculateIntents(...intents: GatewayIntentBits[]): number;
    private _urlConstructor;
    login(token?: string): Promise<Client>;
    private _onOpen;
    private _onMessage;
    private _onError;
    private _onClose;
    private _payloadHandler;
    protected _pack: Function;
    protected _unpack: Function;
}
