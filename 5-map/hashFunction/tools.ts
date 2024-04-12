type HasValidToStringMethod = bigint | number | boolean | symbol;

function hasToStringMethod(value: any): value is HasValidToStringMethod {
    if (['bigint', 'number', 'boolean', 'symbol'].includes(typeof value) ) {
        return true;
    }
    return false
}

function stringToEnteger(message: string): number {
    let result = '';
    for (let index = 0; index < message.length; index++)  {
        result += message.charCodeAt(index);
    }

    return Number.parseInt(result);
}

function toString(key: any): string {

    if (hasToStringMethod(key)) {
        return key.toString()
    }

    if (typeof key === 'object') {
        return objectToString(key)
    }

    if (typeof key === 'string') {
        return key
    }

    return 'undefined'
}

function objectToString(obj: object | null) {
    if (obj === null) {
        return 'null'
    }
    return JSON.stringify(obj).toString()
}

export {stringToEnteger, toString}