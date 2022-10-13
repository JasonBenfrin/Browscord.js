import { GatewayHeartbeat, GatewayOpcodes } from "discord-api-types/v10";
import { Client } from "../../Client";

export default function heartbeatSend (this: Client) {
  const payload : GatewayHeartbeat = {
    op: GatewayOpcodes.Heartbeat,
    d: this._sequenceNumber
  }
  if (this.ws.readyState != this.ws.OPEN) return
  this.ws.send(this._pack(payload))
}