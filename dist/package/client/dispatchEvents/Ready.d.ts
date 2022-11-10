import { GatewayReadyDispatch } from "discord-api-types/v10";
import Client from "../Client";
export default function readyDispatch(this: Client, payload: GatewayReadyDispatch): void;
