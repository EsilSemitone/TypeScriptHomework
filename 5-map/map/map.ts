import { getHash } from "../hashFunction/hashFunction.js";
import { Bundle, NodeBundle } from "../linkedList/linkedList.js";

interface MapStorage {
    [hash: number]: Bundle;
}

class MyMap {
    storage: MapStorage = {};

    constructor()
    /** Нужно передать массив формата [[key, value], [key2, value2] ...]*/
    constructor(array?: any[] | [any, any][]);
     /** Установка ключа и значения */
    constructor(key?:any, value?: any)
    constructor(keyOrArray?:any | [any, any][], value?: any) {

        if (Array.isArray(keyOrArray)) {
            if (isValidListArray(keyOrArray)) {
                this.concatSomeArray(keyOrArray);
                return;
            }
            throw new TypeError('array must have arrays with 2 elements')
        }

        else {
            this.set(keyOrArray, value);
        }
    }

    private concatSomeArray(array: any[]): void {
        for (let [key, value] of array) {
            this.set(key, value);
        }
    }

    public set(key: any, value: any): boolean {
        const hash = getHash(key);

        if (this.storage[hash]) {
            this.storage[hash].push(new NodeBundle(key, value))
            return true;
        }

        this.storage[hash] = new Bundle(key, value);
        return true;
    } 

    public get(key: any): any {
        const hash = getHash(key);

        if (!this.storage[hash]) {
            return null
        }

        if (this.storage[hash].length == 1) {
            return this.storage[hash].head.value
        }

        return this.storage[hash].get(key)
    }

    public has(key: any): any {
        const hash = getHash(key);

        if (!this.storage[hash]) {
            return false
        }

        if (this.storage[hash].length == 1) {
            return true
        }

        return this.storage[hash].get(key) !== null
    }

    public clear() {
        this.storage = {}
    }
    
}

function isValidListArray(array: any[]): array is [any, any][] {
    if (array[0][0] && array[0][1] && !array[0][2]) {
        return true;
    }

    return false
}

export {MyMap}
