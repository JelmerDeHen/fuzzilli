function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["length", "buffer", "a", "byteOffset", "byteLength", "b", "toString", "constructor", "__proto__"], withMethods: ["shift", "lastIndexOf", "join", "split", "flatMap", "subarray", "filter", "reduceRight", "find", "set", "charCodeAt", "trim", "repeat", "isExtensible", "getPrototypeOf", "keys", "substring", "slice", "replace", "deleteProperty", "findIndex", "get", "toLocaleString", "push", "every", "padStart", "preventExtensions", "reduce", "entries", "pop", "forEach", "codePointAt", "copyWithin", "values", "toString", "apply", "getOwnPropertyDescriptor", "has", "unshift", "endsWith", "splice", "ownKeys", "concat", "includes", "map", "indexOf", "defineProperty", "sort", "padEnd", "startsWith", "construct", "flat", "some", "charAt", "fill", "reverse", "setPrototypeOf"])
}
%NeverOptimizeFunction(main);
main();
