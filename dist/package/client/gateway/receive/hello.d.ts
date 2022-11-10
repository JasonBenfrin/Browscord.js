import { GatewayHello } from "discord-api-types/v10";
import Client from "../../Client";
export default function helloReceive(this: Client, payload: GatewayHello): void;
