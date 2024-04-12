"use strict";
function isValidKeyForRecord(value) {
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'symbol':
            return true;
        default:
            return false;
    }
}
const obj = {
    a: 1,
    b: 2
};
function swapKeysAndValues(obj) {
    const result = {};
    for (let [key, value] of Object.entries(obj)) {
        if (isValidKeyForRecord(value)) {
            result[value] = key;
        }
        else if (typeof value === 'object') {
            const resultKey = JSON.stringify(value);
            result[resultKey] = key;
        }
        else {
            const resultKey = new String(value).valueOf();
            result[resultKey] = key;
        }
    }
    return result;
}
console.log(swapKeysAndValues(obj)); //
