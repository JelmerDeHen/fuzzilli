function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["byteOffset", "byteLength", "constructor", "length", "b", "toString", "a", "__proto__", "buffer"], withMethods: ["splice", "has", "entries", "subarray", "reduce", "forEach", "reverse", "slice", "substring", "toString", "startsWith", "unshift", "toLocaleString", "codePointAt", "charAt", "some", "reduceRight", "copyWithin", "construct", "fill", "find", "deleteProperty", "values", "pop", "join", "repeat", "isExtensible", "every", "sort", "charCodeAt", "keys", "findIndex", "apply", "padEnd", "indexOf", "trim", "getOwnPropertyDescriptor", "get", "concat", "padStart", "ownKeys", "flat", "filter", "getPrototypeOf", "lastIndexOf", "setPrototypeOf", "flatMap", "map", "preventExtensions", "set", "includes", "defineProperty", "push", "replace", "endsWith", "shift", "split"])
}
%NeverOptimizeFunction(main);
main();
