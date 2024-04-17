"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    constructor() {
        this.age = 30;
    }
}
__decorate([
    AllowFunc((a) => a > 0)
], User.prototype, "age", void 0);
function AllowFunc(func) {
    return (target, propertyKey) => {
        let _property;
        const get = () => {
            return _property;
        };
        const set = (arg) => {
            if (func(arg)) {
                _property = arg;
            }
            else {
                console.log(`Значение ${arg} не удовлетворяет ${func}`);
            }
        };
        Object.defineProperty(target, propertyKey, { set, get });
    };
}
const user = new User();
user.age = 10;
console.log(user.age);
user.age = 0;
console.log(user.age);
// 10
// Значение 0 не удовлетворяет (a) => a > 0
// 10
