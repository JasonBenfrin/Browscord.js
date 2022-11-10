"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heartbeat_1 = __importDefault(require("../send/heartbeat"));
function heartbeatReceive(payload) {
    clearTimeout(this._heartbeatTimeout);
    this._heartbeatTimeout = setTimeout(() => {
        heartbeat_1.default.call(this);
    }, this._heartbeatInterval);
}
exports.default = heartbeatReceive;
