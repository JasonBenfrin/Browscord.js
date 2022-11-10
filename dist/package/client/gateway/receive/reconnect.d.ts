import { GatewayReconnect } from "discord-api-types/v10";
import Client from "../../Client";
export default function reconnectReceive(this: Client, payload: GatewayReconnect): void;
