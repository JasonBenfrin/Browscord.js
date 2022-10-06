import { GatewayDispatchEvents, GatewayDispatchPayload } from "discord-api-types/v10";
import { Client } from "../../Client";

export default function dispatchReceive (this: Client, payload: GatewayDispatchPayload) {
  switch (payload.t) {
    case GatewayDispatchEvents.Ready:
      this._sessionId = payload.d.session_id
      this._resumeGatewayURL = payload.d.resume_gateway_url
      break;
  }
}