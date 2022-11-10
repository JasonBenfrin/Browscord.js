"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function invalidSessionReceive(payload) {
    if (this.ws.readyState != this.ws.CLOSED && this.ws.readyState != this.ws.CLOSING && payload.d == true)
        this.ws.close(1000, "Op 9 Invalid Session");
}
exports.default = invalidSessionReceive;
