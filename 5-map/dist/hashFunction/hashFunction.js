"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHash = void 0;
const tools_js_1 = require("./tools.js");
const HASH_RANGE_SIZE = 9973; //максимальное количество уникальных хешов
function getHash(value) {
    return (0, tools_js_1.stringToEnteger)((0, tools_js_1.toString)(value)) % HASH_RANGE_SIZE;
}
exports.getHash = getHash;
