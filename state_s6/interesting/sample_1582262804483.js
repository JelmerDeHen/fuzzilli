function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {b:v2,d:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "b"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v16 = 0;
v9[65536] = v5;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v19 = {b:1337,constructor:v18};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor"])
const v22 = new Float64Array(25503);
// v22 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v25 = {a:v18,b:v19,toString:4,...Reflect,...v9,...v22,..."undefined",...0};
// v25 = .object(ofGroup: Object, withProperties: ["length", "a", "byteOffset", "toString", "b", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["subarray", "lastIndexOf", "startsWith", "charCodeAt", "find", "getPrototypeOf", "concat", "reduce", "split", "ownKeys", "reverse", "get", "filter", "reduceRight", "setPrototypeOf", "splice", "keys", "construct", "deleteProperty", "unshift", "toLocaleString", "toString", "some", "includes", "pop", "values", "entries", "padStart", "replace", "trim", "forEach", "push", "substring", "padEnd", "defineProperty", "endsWith", "slice", "repeat", "codePointAt", "copyWithin", "indexOf", "flatMap", "join", "set", "findIndex", "preventExtensions", "every", "flat", "fill", "map", "charAt", "has", "isExtensible", "sort", "shift", "getOwnPropertyDescriptor", "apply"])
}
%NeverOptimizeFunction(main);
main();
