import { GatewayReconnect } from "discord-api-types/v10";
import Client from "../../Client";

export default function reconnectReceive (this: Client, payload: GatewayReconnect) {
  if (this.ws.readyState != this.ws.CLOSED && this.ws.readyState != this.ws.CLOSING) this.ws.close(4000, "Op 7 Requested to Reconnect")
  
}