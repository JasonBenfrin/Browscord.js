"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heartbeat_1 = __importDefault(require("../send/heartbeat"));
const identify_1 = __importDefault(require("../send/identify"));
function helloReceive(payload) {
    this._heartbeatInterval = payload.d.heartbeat_interval;
    heartbeat_1.default.call(this);
    identify_1.default.call(this);
}
exports.default = helloReceive;
