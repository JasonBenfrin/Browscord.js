"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v10_1 = require("discord-api-types/v10");
function identifySend() {
    const payload = {
        op: v10_1.GatewayOpcodes.Identify,
        d: this.identifyOptions
    };
    this.ws.send(this._pack(payload));
}
exports.default = identifySend;
