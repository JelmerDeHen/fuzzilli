function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "__proto__", "c", "toString", "constructor"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["toString", "a", "c", "length", "valueOf", "prototype", "__proto__", "constructor"], withMethods: ["padStart", "endsWith", "toString", "unshift", "join", "charCodeAt", "keys", "copyWithin", "includes", "findIndex", "repeat", "toLocaleString", "assign", "slice", "push", "padEnd", "every", "fromEntries", "isExtensible", "sort", "seal", "isSealed", "getPrototypeOf", "startsWith", "reduce", "map", "split", "getOwnPropertySymbols", "preventExtensions", "isFrozen", "indexOf", "replace", "codePointAt", "reduceRight", "pop", "substring", "charAt", "setPrototypeOf", "trim", "filter", "reverse", "create", "freeze", "flat", "defineProperty", "is", "forEach", "some", "values", "splice", "fill", "getOwnPropertyNames", "lastIndexOf", "find", "entries", "shift", "concat", "getOwnPropertyDescriptor", "getOwnPropertyDescriptors", "defineProperties", "flatMap"])
}
%NeverOptimizeFunction(main);
main();
