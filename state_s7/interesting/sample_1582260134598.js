function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "byteOffset", "a", "toString", "byteLength", "constructor", "buffer", "length"], withMethods: ["split", "charCodeAt", "pop", "every", "setPrototypeOf", "get", "findIndex", "charAt", "keys", "entries", "codePointAt", "endsWith", "fill", "toString", "construct", "flatMap", "concat", "flat", "set", "reduceRight", "apply", "has", "startsWith", "copyWithin", "getPrototypeOf", "push", "substring", "subarray", "preventExtensions", "includes", "map", "indexOf", "ownKeys", "find", "some", "padStart", "getOwnPropertyDescriptor", "lastIndexOf", "isExtensible", "reduce", "sort", "trim", "toLocaleString", "forEach", "unshift", "shift", "filter", "slice", "reverse", "replace", "values", "repeat", "deleteProperty", "padEnd", "join", "splice", "defineProperty"])
}
%NeverOptimizeFunction(main);
main();
