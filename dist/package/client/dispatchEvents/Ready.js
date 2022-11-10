"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readyDispatch(payload) {
    this._sessionId = payload.d.session_id;
    this._resumeGatewayURL = payload.d.resume_gateway_url;
}
exports.default = readyDispatch;
