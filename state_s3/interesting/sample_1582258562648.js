function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["a", "c", "valueOf", "__proto__", "toString", "constructor"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "prototype", "__proto__", "a", "toString", "length", "c"], withMethods: ["create", "keys", "getOwnPropertyDescriptor", "concat", "flat", "push", "substring", "join", "every", "preventExtensions", "entries", "reduceRight", "reduce", "map", "toString", "trim", "getOwnPropertySymbols", "setPrototypeOf", "copyWithin", "defineProperties", "repeat", "freeze", "endsWith", "findIndex", "slice", "assign", "sort", "padStart", "lastIndexOf", "unshift", "getOwnPropertyNames", "shift", "seal", "forEach", "filter", "getPrototypeOf", "some", "is", "isFrozen", "includes", "fromEntries", "toLocaleString", "isExtensible", "indexOf", "padEnd", "splice", "charCodeAt", "isSealed", "charAt", "values", "flatMap", "startsWith", "defineProperty", "reverse", "pop", "fill", "getOwnPropertyDescriptors", "find", "split", "replace", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
