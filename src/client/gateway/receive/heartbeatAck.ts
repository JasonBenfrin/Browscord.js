import Client from "../../Client";
import heartbeatSend from "../send/heartbeat";

export default function heartbeatAckReceive (this: Client) {
  this._heartbeatTimeout = setTimeout(() => {
    heartbeatSend.call(this)
  }, this._heartbeatInterval)
}