function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {b:v2,d:v4};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = 0;
v9[65536] = v5;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = {b:1337,constructor:v18};
// v19 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
const v22 = new Float64Array(25503);
// v22 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
const v25 = {a:v18,b:v19,toString:4,...Reflect,...v9,...v22,..."undefined",...0};
// v25 = .object(ofGroup: Object, withProperties: ["constructor", "b", "length", "buffer", "byteLength", "a", "toString", "byteOffset", "__proto__"], withMethods: ["copyWithin", "every", "padStart", "charAt", "replace", "toLocaleString", "forEach", "substring", "endsWith", "keys", "subarray", "flat", "lastIndexOf", "defineProperty", "split", "deleteProperty", "slice", "isExtensible", "reduceRight", "trim", "startsWith", "fill", "entries", "pop", "indexOf", "reduce", "getOwnPropertyDescriptor", "codePointAt", "toString", "charCodeAt", "sort", "find", "concat", "join", "getPrototypeOf", "apply", "repeat", "construct", "get", "unshift", "padEnd", "includes", "ownKeys", "values", "push", "flatMap", "splice", "filter", "has", "shift", "map", "setPrototypeOf", "findIndex", "preventExtensions", "reverse", "set", "some"])
}
%NeverOptimizeFunction(main);
main();
