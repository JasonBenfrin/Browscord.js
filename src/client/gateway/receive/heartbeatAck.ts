import { GatewayHeartbeatAck } from "discord-api-types/v10";
import { Client } from "../../Client";
import heartbeatSend from "../send/heartbeat";

export default function heartbeatAckReceive (this: Client) {
  this._heartbeatTimeout = setTimeout(heartbeatSend.call, this._heartbeatInterval, this)
}