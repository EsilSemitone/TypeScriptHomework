import {stringToEnteger, toString} from './tools.js';

const HASH_RANGE_SIZE = 9973 //максимальное количество уникальных хешов

function getHash(value: any): number {
    return stringToEnteger(toString(value)) % HASH_RANGE_SIZE
}

export {getHash}

