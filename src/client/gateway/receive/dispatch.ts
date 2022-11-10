import { GatewayDispatchEvents, GatewayDispatchPayload } from "discord-api-types/v10";
import Client from "../../Client";
import readyDispatch from "../../dispatchEvents/Ready";

export default function dispatchReceive (this: Client, payload: GatewayDispatchPayload) {
  switch (payload.t) {
    case GatewayDispatchEvents.Ready:
      readyDispatch.call(this, payload)
      break;
  }
}