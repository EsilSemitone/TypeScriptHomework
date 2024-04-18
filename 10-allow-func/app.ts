//ВОПРОС
// почему этот код не компилится командой tsc app.ts
// но компилится командой tsc ?

class User {
    @AllowFunc((a: number) => a > 0)
    age: number = 30;
}

function AllowFunc<T>(func: (args: T) => boolean) {
    return (
        target: Object,
        propertyKey: string | symbol
    ) => {
        let _property: T;

        const get = () => {
            return _property;
        }

        const set = (arg: T) => {
            if (func(arg)) {
                _property = arg;
            }
            else {
                console.log(`Значение ${arg} не удовлетворяет ${func}`)
            }
        }

        Object.defineProperty(target, propertyKey, {set, get})
    }
}

const user = new User();
user.age = 10;
console.log(user.age);
user.age = 0;
console.log(user.age);
// 10
// Значение 0 не удовлетворяет (a) => a > 0
// 10