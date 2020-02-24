function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "byteOffset", "byteLength", "constructor", "b", "toString", "buffer"], withMethods: ["replace", "entries", "construct", "findIndex", "defineProperty", "isExtensible", "splice", "filter", "lastIndexOf", "split", "pop", "trim", "push", "charCodeAt", "setPrototypeOf", "apply", "preventExtensions", "forEach", "values", "flat", "reduceRight", "charAt", "every", "ownKeys", "join", "shift", "includes", "sort", "unshift", "toString", "flatMap", "map", "codePointAt", "copyWithin", "deleteProperty", "slice", "keys", "reverse", "set", "padEnd", "padStart", "get", "subarray", "endsWith", "getPrototypeOf", "find", "toLocaleString", "fill", "getOwnPropertyDescriptor", "reduce", "substring", "repeat", "concat", "has", "some", "startsWith", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
