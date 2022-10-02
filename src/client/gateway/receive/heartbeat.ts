import { GatewayHeartbeatRequest } from "discord-api-types/v10";
import { Client } from "../../Client";

export default function heartbeatReceive(this: Client, payload: GatewayHeartbeatRequest) {
  this.ws
}