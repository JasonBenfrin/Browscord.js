import { GatewayHeartbeatRequest } from "discord-api-types/v10";
import Client from "../../Client";
import heartbeatSend from "../send/heartbeat";

export default function heartbeatReceive(this: Client, payload: GatewayHeartbeatRequest) {
  clearTimeout(this._heartbeatTimeout)
  this._heartbeatTimeout = setTimeout(() => {
    heartbeatSend.call(this)
  }, this._heartbeatInterval)
}