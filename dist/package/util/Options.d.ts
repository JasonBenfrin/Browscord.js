import { GatewayIdentifyData, GatewayURLQuery } from "discord-api-types/v10";
export interface ClientOptions {
    identifyOptions: GatewayIdentifyData;
    socketURLOptions?: GatewayURLQuery;
    useRest?: boolean;
    shardId?: number;
    shardCount?: number;
}
export declare const defaultIdentifyOption: GatewayIdentifyData;
export declare const defaultSocketURLOption: GatewayURLQuery;
