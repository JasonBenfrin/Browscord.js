"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v10_1 = require("discord-api-types/v10");
const Ready_1 = __importDefault(require("../../dispatchEvents/Ready"));
function dispatchReceive(payload) {
    switch (payload.t) {
        case v10_1.GatewayDispatchEvents.Ready:
            Ready_1.default.call(this, payload);
            break;
    }
}
exports.default = dispatchReceive;
