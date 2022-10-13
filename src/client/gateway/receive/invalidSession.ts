import { GatewayInvalidSession } from "discord-api-types/v10";
import { Client } from "../../Client";

export default function invalidSessionReceive (this: Client, payload: GatewayInvalidSession) {
  if (this.ws.readyState != this.ws.CLOSED || this.ws.readyState != this.ws.CLOSING && payload.d == true) this.ws.close(4000, "Op 9 Invalid Session")
}