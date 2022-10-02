import { GatewayIdentify, GatewayOpcodes } from "discord-api-types/v10";
import { Client } from "../../Client";

export default function identifySend (this: Client) {
  const payload : GatewayIdentify = {
    op: GatewayOpcodes.Identify,
    d: this.identifyOptions
  }
  this.ws.send(this._pack(payload))
}