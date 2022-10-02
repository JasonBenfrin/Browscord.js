import { GatewayHello } from "discord-api-types/v10";
import { Client } from "../../Client";
import heartbeatSend from "../send/heartbeat";
import identifySend from "../send/identify";

export default function helloReceive (this: Client, payload: GatewayHello) {
  this._heartbeatInterval = payload.d.heartbeat_interval
  heartbeatSend.call(this)
  identifySend.call(this)
}