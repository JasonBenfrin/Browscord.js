"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v10_1 = require("discord-api-types/v10");
function resumeSend() {
    if (!this._sequenceNumber)
        return console.error('No sequence number found!');
    const payload = {
        op: v10_1.GatewayOpcodes.Resume,
        d: {
            seq: this._sequenceNumber,
            session_id: this._sessionId,
            token: this.identifyOptions.token
        }
    };
    this.dispatchEvent(new CustomEvent('resuming'));
    this.ws.send(this._pack(payload));
}
exports.default = resumeSend;
