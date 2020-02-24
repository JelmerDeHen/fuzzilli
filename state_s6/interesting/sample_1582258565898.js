function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "toString", "c", "valueOf"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["prototype", "constructor", "length", "c", "toString", "a", "__proto__", "valueOf"], withMethods: ["freeze", "repeat", "forEach", "getOwnPropertySymbols", "defineProperty", "split", "concat", "splice", "indexOf", "slice", "substring", "getPrototypeOf", "defineProperties", "copyWithin", "reduce", "trim", "filter", "entries", "unshift", "getOwnPropertyDescriptor", "getOwnPropertyDescriptors", "preventExtensions", "codePointAt", "padEnd", "values", "setPrototypeOf", "keys", "fromEntries", "map", "charCodeAt", "flat", "shift", "push", "lastIndexOf", "endsWith", "sort", "toString", "reduceRight", "flatMap", "isFrozen", "replace", "toLocaleString", "startsWith", "includes", "isSealed", "reverse", "fill", "seal", "every", "find", "is", "create", "join", "padStart", "isExtensible", "some", "getOwnPropertyNames", "findIndex", "pop", "charAt", "assign"])
}
%NeverOptimizeFunction(main);
main();
