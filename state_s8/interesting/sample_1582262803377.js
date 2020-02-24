function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {b:v2,d:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "b"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v16 = 0;
v9[65536] = v5;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v19 = {b:1337,constructor:v18};
// v19 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor"])
const v22 = new Float64Array(25503);
// v22 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
const v25 = {a:v18,b:v19,toString:4,...Reflect,...v9,...v22,..."undefined",...0};
// v25 = .object(ofGroup: Object, withProperties: ["buffer", "byteLength", "byteOffset", "constructor", "__proto__", "length", "a", "b", "toString"], withMethods: ["entries", "flatMap", "copyWithin", "shift", "forEach", "preventExtensions", "construct", "getOwnPropertyDescriptor", "splice", "reverse", "reduce", "findIndex", "apply", "flat", "setPrototypeOf", "toString", "fill", "includes", "some", "substring", "filter", "get", "split", "padStart", "ownKeys", "trim", "push", "sort", "subarray", "indexOf", "replace", "codePointAt", "join", "find", "pop", "has", "startsWith", "reduceRight", "every", "toLocaleString", "charCodeAt", "padEnd", "slice", "repeat", "map", "values", "lastIndexOf", "set", "charAt", "getPrototypeOf", "keys", "unshift", "defineProperty", "isExtensible", "concat", "deleteProperty", "endsWith"])
}
%NeverOptimizeFunction(main);
main();
