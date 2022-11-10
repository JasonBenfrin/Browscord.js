"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reconnectReceive(payload) {
    if (this.ws.readyState != this.ws.CLOSED && this.ws.readyState != this.ws.CLOSING)
        this.ws.close(4000, "Op 7 Requested to Reconnect");
}
exports.default = reconnectReceive;
