let a = {a: 5, b: ''}
let b = {a: 10, c: true}

function removeDuplicateKeys<T extends object, Y extends object>(obj1: T, obj2: Y): Omit<T, keyof Y> {
    //Не пришло в голову как сделать более прилично без двух "as" 
    //Как это можно сделать?
    const result: Partial<T> = {};

    const keys = Object.keys(obj1) as [keyof T]
    
    for (let key of keys) {
        if (!obj2.hasOwnProperty(key))
            result[key] = obj1[key];
    }

    return result as Omit<T, keyof Y>;
}

const newObject = removeDuplicateKeys(a, b);
console.log(newObject)
//{ b: '' }