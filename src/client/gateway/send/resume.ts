import { GatewayOpcodes, GatewayResume } from "discord-api-types/v10";
import Client from "../../Client";

export default function resumeSend(this: Client) {
  if (!this._sequenceNumber) return console.error('No sequence number found!')
  const payload: GatewayResume = {
    op: GatewayOpcodes.Resume,
    d: {
      seq: this._sequenceNumber,
      session_id: this._sessionId,
      token: this.identifyOptions.token
    }
  }

  this.dispatchEvent(new CustomEvent('resuming'))
  this.ws.send(this._pack(payload))
}