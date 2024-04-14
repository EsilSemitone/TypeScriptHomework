const user = {
    name: 'Vasya',
    age: 6,
    skills: [
        'typescript', 'javascript'
    ]
}

type SomeObjCover<T> = {
    [KEY in keyof T] +?: any
}

function pickObjectKeys<T extends object>(obj: T, arrKeys: [keyof T]): SomeObjCover<T> {
    const result: SomeObjCover<T> = {};

    for (let key of arrKeys) {
        result[key] = obj[key];
    }
    return result
}

console.log(pickObjectKeys(user, ["skills"]));
//{ skills: [ 'typescript', 'javascript' ] }