"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeBundle = exports.Bundle = void 0;
class NodeBundle {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    setNextNode(value) {
        value.prev = this;
        this.next = value;
    }
}
exports.NodeBundle = NodeBundle;
class Bundle {
    constructor(key, value) {
        this.head = new NodeBundle(key, value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        this.head.setNextNode(value);
        this.tail = value;
        this.length += 1;
    }
    get(key) {
        if (this.getValue(key, this.head) == key) {
            return key;
        }
        return null;
    }
    pop() {
        if (this.tail.prev) {
            this.tail.prev.next = null;
        }
        return this.tail;
    }
    getValue(key, bundle) {
        if ((bundle === null || bundle === void 0 ? void 0 : bundle.key) === key || bundle === null) {
            return key;
        }
        return this.getValue(key, bundle.next);
    }
}
exports.Bundle = Bundle;
