function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "a", "toString", "valueOf", "c", "__proto__"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["length", "c", "valueOf", "constructor", "__proto__", "a", "toString", "prototype"], withMethods: ["repeat", "shift", "toLocaleString", "fromEntries", "charAt", "isSealed", "isFrozen", "reduceRight", "defineProperty", "setPrototypeOf", "findIndex", "trim", "reduce", "preventExtensions", "isExtensible", "getOwnPropertyNames", "defineProperties", "slice", "includes", "keys", "fill", "replace", "padEnd", "lastIndexOf", "getOwnPropertyDescriptors", "freeze", "padStart", "assign", "filter", "some", "split", "entries", "getOwnPropertySymbols", "substring", "indexOf", "splice", "create", "concat", "flat", "unshift", "startsWith", "push", "forEach", "getOwnPropertyDescriptor", "toString", "flatMap", "join", "is", "copyWithin", "find", "values", "map", "charCodeAt", "codePointAt", "endsWith", "every", "reverse", "seal", "pop", "sort", "getPrototypeOf"])
}
%NeverOptimizeFunction(main);
main();
