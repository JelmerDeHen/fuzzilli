function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "toString", "constructor", "__proto__", "a"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["prototype", "valueOf", "c", "length", "toString", "a", "__proto__", "constructor"], withMethods: ["toLocaleString", "getOwnPropertyDescriptors", "isExtensible", "pop", "getPrototypeOf", "includes", "flatMap", "flat", "padStart", "every", "values", "find", "defineProperty", "defineProperties", "assign", "create", "concat", "getOwnPropertyDescriptor", "map", "seal", "padEnd", "findIndex", "lastIndexOf", "split", "getOwnPropertySymbols", "join", "forEach", "indexOf", "charAt", "startsWith", "toString", "replace", "reverse", "reduce", "repeat", "preventExtensions", "some", "filter", "setPrototypeOf", "freeze", "push", "sort", "splice", "codePointAt", "reduceRight", "shift", "trim", "getOwnPropertyNames", "copyWithin", "isFrozen", "isSealed", "keys", "endsWith", "slice", "is", "entries", "fromEntries", "unshift", "fill", "charCodeAt", "substring"])
}
%NeverOptimizeFunction(main);
main();
