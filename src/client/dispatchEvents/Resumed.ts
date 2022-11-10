import { GatewayResumedDispatch } from "discord-api-types/v10";
import Client from "../Client";

export default function resumedDispatch(this: Client, payload: GatewayResumedDispatch) {
  this.dispatchEvent(new CustomEvent('resumed'))
}