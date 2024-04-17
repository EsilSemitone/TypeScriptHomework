type ValidKeyForRecord = string | number | symbol;

function isValidKeyForRecord(value: unknown): value is ValidKeyForRecord {
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'symbol':
            return true;

        default:
            return false;
    }
}

const obj: Record<string, number> = {
    a: 1,
    b: 2
}

function swapKeysAndValues<K extends ValidKeyForRecord, V>(obj: Record<K, V>): Record<ValidKeyForRecord, ValidKeyForRecord> {
    const result: Record<ValidKeyForRecord, ValidKeyForRecord>  = {}

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

console.log(swapKeysAndValues<string, number>(obj)) // { '1': 'a', '2': 'b' }
