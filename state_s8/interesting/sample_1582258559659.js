function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "valueOf", "a", "__proto__", "c"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "toString", "constructor", "valueOf", "prototype", "a", "length"], withMethods: ["find", "isExtensible", "startsWith", "fromEntries", "fill", "reverse", "filter", "trim", "getOwnPropertySymbols", "concat", "padStart", "reduceRight", "keys", "getOwnPropertyNames", "getOwnPropertyDescriptor", "codePointAt", "some", "indexOf", "flat", "includes", "isSealed", "freeze", "getPrototypeOf", "sort", "setPrototypeOf", "forEach", "defineProperty", "is", "flatMap", "unshift", "padEnd", "seal", "preventExtensions", "defineProperties", "isFrozen", "create", "slice", "entries", "substring", "shift", "copyWithin", "repeat", "splice", "every", "reduce", "map", "lastIndexOf", "join", "toString", "values", "endsWith", "toLocaleString", "replace", "split", "assign", "charCodeAt", "getOwnPropertyDescriptors", "findIndex", "pop", "push", "charAt"])
}
%NeverOptimizeFunction(main);
main();
