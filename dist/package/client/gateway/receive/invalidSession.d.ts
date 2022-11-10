import { GatewayInvalidSession } from "discord-api-types/v10";
import Client from "../../Client";
export default function invalidSessionReceive(this: Client, payload: GatewayInvalidSession): void;
