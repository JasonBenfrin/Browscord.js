"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSocketURLOption = exports.defaultIdentifyOption = void 0;
const platform_1 = __importDefault(require("platform"));
exports.defaultIdentifyOption = {
    token: '',
    properties: {
        os: platform_1.default.os?.toString() || 'linux',
        browser: 'browscord.js',
        device: 'browscord.js'
    },
    intents: 0,
    compress: true
};
exports.defaultSocketURLOption = {
    v: '10',
    encoding: 'etf',
};
