function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "c", "valueOf", "__proto__", "a", "constructor"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "constructor", "a", "prototype", "c", "toString", "__proto__"], withMethods: ["sort", "reduceRight", "codePointAt", "getPrototypeOf", "assign", "getOwnPropertyDescriptors", "toLocaleString", "slice", "findIndex", "every", "indexOf", "padEnd", "flatMap", "substring", "defineProperties", "fill", "keys", "defineProperty", "getOwnPropertyDescriptor", "repeat", "push", "endsWith", "concat", "charAt", "toString", "entries", "isSealed", "seal", "filter", "reverse", "unshift", "getOwnPropertySymbols", "splice", "join", "copyWithin", "getOwnPropertyNames", "includes", "find", "padStart", "startsWith", "some", "preventExtensions", "charCodeAt", "map", "pop", "forEach", "create", "freeze", "values", "isExtensible", "setPrototypeOf", "isFrozen", "fromEntries", "split", "flat", "trim", "lastIndexOf", "reduce", "replace", "shift", "is"])
}
%NeverOptimizeFunction(main);
main();
