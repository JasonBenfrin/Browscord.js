import { GatewayReadyDispatch } from "discord-api-types/v10";
import { Client } from "../Client";

export default function readyDispatch(this: Client, payload: GatewayReadyDispatch) {
  this._sessionId = payload.d.session_id
  this._resumeGatewayURL = payload.d.resume_gateway_url
}