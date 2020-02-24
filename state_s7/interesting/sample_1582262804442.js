function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {b:v2,d:v4};
// v5 = .object(ofGroup: Object, withProperties: ["b", "d", "__proto__"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v16 = 0;
v9[65536] = v5;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v19 = {b:1337,constructor:v18};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b"])
const v22 = new Float64Array(25503);
// v22 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
const v25 = {a:v18,b:v19,toString:4,...Reflect,...v9,...v22,..."undefined",...0};
// v25 = .object(ofGroup: Object, withProperties: ["buffer", "length", "constructor", "__proto__", "byteOffset", "byteLength", "toString", "a", "b"], withMethods: ["setPrototypeOf", "includes", "filter", "flat", "charAt", "pop", "subarray", "slice", "deleteProperty", "flatMap", "reverse", "join", "startsWith", "map", "endsWith", "get", "getOwnPropertyDescriptor", "construct", "reduceRight", "has", "preventExtensions", "entries", "lastIndexOf", "values", "push", "substring", "unshift", "copyWithin", "isExtensible", "shift", "defineProperty", "concat", "split", "keys", "set", "replace", "padEnd", "findIndex", "apply", "find", "sort", "ownKeys", "splice", "forEach", "toString", "padStart", "fill", "some", "repeat", "getPrototypeOf", "indexOf", "every", "codePointAt", "trim", "charCodeAt", "reduce", "toLocaleString"])
}
%NeverOptimizeFunction(main);
main();
