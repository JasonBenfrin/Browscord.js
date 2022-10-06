import { GatewayOpcodes, GatewayResume } from "discord-api-types/v10";
import { Client } from "../../Client";

export function resumeSend(this: Client) {
  const payload: GatewayResume = {
    op: GatewayOpcodes.Resume,
    d: {
      seq: this._sequenceNumber,
      session_id: this._sessionId,
      token: this.identifyOptions.token
    }
  }
}