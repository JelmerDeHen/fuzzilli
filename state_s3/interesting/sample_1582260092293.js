function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "a", "byteLength", "length", "b", "byteOffset", "buffer"], withMethods: ["shift", "fill", "charCodeAt", "concat", "some", "slice", "replace", "get", "subarray", "padStart", "toString", "join", "forEach", "codePointAt", "every", "endsWith", "indexOf", "apply", "sort", "preventExtensions", "unshift", "copyWithin", "padEnd", "toLocaleString", "setPrototypeOf", "filter", "lastIndexOf", "ownKeys", "substring", "has", "find", "reduce", "isExtensible", "getOwnPropertyDescriptor", "startsWith", "map", "findIndex", "reduceRight", "construct", "pop", "splice", "flat", "trim", "reverse", "push", "charAt", "includes", "keys", "values", "split", "flatMap", "deleteProperty", "entries", "repeat", "defineProperty", "getPrototypeOf", "set"])
}
%NeverOptimizeFunction(main);
main();
