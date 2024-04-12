class NodeBundle {
    key: any;
    value: any;
    next: NodeBundle | null
    prev: NodeBundle | null

    constructor(key: any, value: any) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    setNextNode(value: NodeBundle): void {
        value.prev = this;
        this.next = value;
    }
}

class Bundle {
    head: NodeBundle;
    tail: NodeBundle;
    length: number;

    constructor(key: any, value: any) {
        this.head = new NodeBundle(key, value);
        this.tail = this.head;
        this.length = 1;
    }

    public push(value: NodeBundle): void {
        this.head.setNextNode(value);
        this.tail = value;
        this.length += 1
    }

    public get(key: any): any {
        if (this.getValue(key, this.head) == key) {
            return key
        }

        return null
    }

    public pop(): NodeBundle {
        if (this.tail.prev) {
            this.tail.prev.next = null;
        }
        return this.tail;
    }

    private getValue(key: any, bundle: NodeBundle | null): any {
        if (bundle?.key === key || bundle === null) {
            return key;
        }

        return this.getValue(key, bundle.next)
    }
}

export {Bundle, NodeBundle}