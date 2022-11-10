"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v10_1 = require("discord-api-types/v10");
function heartbeatSend() {
    const payload = {
        op: v10_1.GatewayOpcodes.Heartbeat,
        d: this._sequenceNumber
    };
    if (this.ws.readyState != this.ws.OPEN)
        return;
    this.ws.send(this._pack(payload));
}
exports.default = heartbeatSend;
