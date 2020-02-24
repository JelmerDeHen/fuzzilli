function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["c", "constructor", "valueOf", "__proto__", "a", "toString"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "prototype", "constructor", "a", "__proto__", "length", "c"], withMethods: ["every", "charCodeAt", "assign", "seal", "includes", "join", "pop", "reduceRight", "codePointAt", "filter", "keys", "splice", "padEnd", "is", "isFrozen", "getOwnPropertyNames", "freeze", "copyWithin", "shift", "toLocaleString", "substring", "defineProperty", "padStart", "entries", "some", "sort", "isExtensible", "charAt", "isSealed", "values", "getOwnPropertyDescriptors", "getPrototypeOf", "findIndex", "defineProperties", "find", "fill", "endsWith", "getOwnPropertyDescriptor", "toString", "setPrototypeOf", "flat", "trim", "reduce", "map", "flatMap", "lastIndexOf", "slice", "indexOf", "unshift", "replace", "fromEntries", "repeat", "reverse", "getOwnPropertySymbols", "split", "concat", "create", "push", "forEach", "preventExtensions", "startsWith"])
}
%NeverOptimizeFunction(main);
main();
