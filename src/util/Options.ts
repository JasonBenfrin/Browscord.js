import { GatewayIdentifyData } from "discord-api-types/v10";
import platform from "platform";
import { SocketURLOptions } from "../client/Client";

export const defaultIdentifyOption : GatewayIdentifyData = {
  token : '',
  properties : {
    os: platform.os?.toString() || 'linux',
    browser: 'browscord.js',
    device: 'browscord.js'
  },
  intents: 0
}

export const defaultSocketURLOption : SocketURLOptions = {
  v: 10,
  encoding: 'json'
}