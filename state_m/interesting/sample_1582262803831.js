function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {b:v2,d:v4};
// v5 = .object(ofGroup: Object, withProperties: ["b", "d", "__proto__"])
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v16 = 0;
v9[65536] = v5;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v19 = {b:1337,constructor:v18};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor"])
const v22 = new Float64Array(25503);
// v22 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
const v25 = {a:v18,b:v19,toString:4,...Reflect,...v9,...v22,..."undefined",...0};
// v25 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "byteLength", "toString", "byteOffset", "b", "buffer", "constructor", "a"], withMethods: ["reduce", "repeat", "fill", "values", "find", "slice", "charAt", "push", "toString", "defineProperty", "reduceRight", "splice", "trim", "set", "map", "substring", "keys", "sort", "toLocaleString", "has", "setPrototypeOf", "preventExtensions", "unshift", "reverse", "padStart", "getOwnPropertyDescriptor", "forEach", "startsWith", "shift", "flat", "ownKeys", "replace", "indexOf", "lastIndexOf", "padEnd", "get", "split", "pop", "deleteProperty", "isExtensible", "endsWith", "filter", "findIndex", "entries", "charCodeAt", "concat", "includes", "codePointAt", "some", "construct", "apply", "join", "subarray", "every", "flatMap", "copyWithin", "getPrototypeOf"])
}
%NeverOptimizeFunction(main);
main();
