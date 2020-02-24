function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "toString", "a", "valueOf"])
let v7 = v6;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v17 = 0;
let v20 = 0;
const v32 = {toString:127,__proto__:1,...v10,..."pvU0UUjoya",...Object,...this,...v7};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__", "prototype", "constructor", "length", "c", "toString", "a", "valueOf"], withMethods: ["join", "includes", "isExtensible", "find", "setPrototypeOf", "startsWith", "replace", "freeze", "fill", "pop", "charAt", "isFrozen", "reduce", "findIndex", "lastIndexOf", "substring", "splice", "defineProperties", "repeat", "sort", "push", "create", "copyWithin", "padEnd", "charCodeAt", "preventExtensions", "shift", "fromEntries", "flat", "getOwnPropertyDescriptors", "toLocaleString", "padStart", "reduceRight", "unshift", "flatMap", "getOwnPropertyDescriptor", "is", "concat", "defineProperty", "codePointAt", "keys", "every", "values", "forEach", "getOwnPropertySymbols", "split", "map", "trim", "getPrototypeOf", "assign", "entries", "seal", "toString", "filter", "slice", "isSealed", "some", "indexOf", "endsWith", "reverse", "getOwnPropertyNames"])
}
%NeverOptimizeFunction(main);
main();
