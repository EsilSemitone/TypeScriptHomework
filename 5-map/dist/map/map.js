"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMap = void 0;
const hashFunction_js_1 = require("../hashFunction/hashFunction.js");
const linkedList_js_1 = require("../linkedList/linkedList.js");
class MyMap {
    constructor(keyOrArray, value) {
        this.storage = {};
        if (Array.isArray(keyOrArray)) {
            if (isValidListArray(keyOrArray)) {
                this.concatSomeArray(keyOrArray);
                return;
            }
            throw new TypeError('array must have arrays with 2 elements');
        }
        else {
            this.set(keyOrArray, value);
        }
    }
    concatSomeArray(array) {
        for (let [key, value] of array) {
            this.set(key, value);
        }
    }
    set(key, value) {
        const hash = (0, hashFunction_js_1.getHash)(key);
        if (this.storage[hash]) {
            this.storage[hash].push(new linkedList_js_1.NodeBundle(key, value));
            return true;
        }
        this.storage[hash] = new linkedList_js_1.Bundle(key, value);
        return true;
    }
    get(key) {
        const hash = (0, hashFunction_js_1.getHash)(key);
        if (!this.storage[hash]) {
            return null;
        }
        if (this.storage[hash].length == 1) {
            return this.storage[hash].head.value;
        }
        return this.storage[hash].get(key);
    }
    has(key) {
        const hash = (0, hashFunction_js_1.getHash)(key);
        if (!this.storage[hash]) {
            return false;
        }
        if (this.storage[hash].length == 1) {
            return true;
        }
        return this.storage[hash].get(key) !== null;
    }
    clear() {
        this.storage = {};
    }
}
exports.MyMap = MyMap;
function isValidListArray(array) {
    if (array[0][0] && array[0][1] && !array[0][2]) {
        return true;
    }
    return false;
}
