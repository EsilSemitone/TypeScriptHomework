declare module 'sort-by' {

    export function sortBy(param1: string, param2: string): <T extends Object>(a: T, b: T) => number;

}