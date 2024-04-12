import { MyMap } from "./map/map.js";

const map = new MyMap([['name', 'esil'], [2, 'alexey']]);

console.log(map.get('name')); // esil
console.log(map.get(2)); // alexey
console.log(map.get(3)); // null
console.log(map.has('name')); // true
console.log(map.has(3)); // false
console.log(map.set(3, {age: 100}));  // true
console.log(map.get(3)); // {age: 100}
map.clear();
console.log(map.get('name')); // null

