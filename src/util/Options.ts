import { GatewayIdentifyData, GatewayURLQuery } from "discord-api-types/v10";
import platform from "platform";

export interface ClientOptions {
  identifyOptions: GatewayIdentifyData,
  socketURLOptions?: GatewayURLQuery,
  useRest?: boolean,
  shardId?: number,
  shardCount?: number,
}

export const defaultIdentifyOption : GatewayIdentifyData = {
  token : '',
  properties : {
    os: platform.os?.toString() || 'linux',
    browser: 'browscord.js',
    device: 'browscord.js'
  },
  intents: 0,
  compress: true
}

export const defaultSocketURLOption : GatewayURLQuery = {
  v: '10',
  encoding: 'etf',
}