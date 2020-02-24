function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "byteLength", "length", "byteOffset", "b", "buffer", "a"], withMethods: ["setPrototypeOf", "some", "toLocaleString", "getPrototypeOf", "repeat", "unshift", "split", "flat", "has", "get", "set", "entries", "findIndex", "filter", "fill", "reduceRight", "isExtensible", "slice", "indexOf", "construct", "forEach", "toString", "shift", "startsWith", "reduce", "copyWithin", "codePointAt", "values", "defineProperty", "getOwnPropertyDescriptor", "splice", "map", "push", "reverse", "includes", "lastIndexOf", "padEnd", "sort", "padStart", "charCodeAt", "substring", "subarray", "deleteProperty", "join", "keys", "pop", "trim", "ownKeys", "every", "replace", "preventExtensions", "apply", "concat", "flatMap", "find", "endsWith", "charAt"])
}
%NeverOptimizeFunction(main);
main();
