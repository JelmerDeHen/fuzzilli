function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "buffer", "length", "byteOffset", "b", "constructor", "a", "byteLength", "toString"], withMethods: ["ownKeys", "deleteProperty", "map", "apply", "flat", "subarray", "every", "charAt", "copyWithin", "includes", "padEnd", "push", "reduceRight", "charCodeAt", "endsWith", "get", "split", "preventExtensions", "getOwnPropertyDescriptor", "entries", "startsWith", "padStart", "reverse", "lastIndexOf", "find", "filter", "unshift", "toString", "sort", "set", "indexOf", "trim", "getPrototypeOf", "defineProperty", "fill", "slice", "flatMap", "toLocaleString", "substring", "has", "construct", "splice", "forEach", "some", "shift", "keys", "reduce", "setPrototypeOf", "concat", "repeat", "isExtensible", "codePointAt", "findIndex", "join", "values", "replace", "pop"])
}
%NeverOptimizeFunction(main);
main();
