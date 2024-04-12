"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.stringToEnteger = void 0;
function hasToStringMethod(value) {
    if (['bigint', 'number', 'boolean', 'symbol'].includes(typeof value)) {
        return true;
    }
    return false;
}
function stringToEnteger(message) {
    let result = '';
    for (let index = 0; index < message.length; index++) {
        result += message.charCodeAt(index);
    }
    return Number.parseInt(result);
}
exports.stringToEnteger = stringToEnteger;
function toString(key) {
    if (hasToStringMethod(key)) {
        return key.toString();
    }
    if (typeof key === 'object') {
        return objectToString(key);
    }
    if (typeof key === 'string') {
        return key;
    }
    return 'undefined';
}
exports.toString = toString;
function objectToString(obj) {
    if (obj === null) {
        return 'null';
    }
    return JSON.stringify(obj).toString();
}
