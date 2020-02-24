function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteLength", "b", "a", "length", "buffer", "byteOffset", "toString"], withMethods: ["includes", "charAt", "apply", "padStart", "has", "reduceRight", "toLocaleString", "isExtensible", "reverse", "defineProperty", "splice", "padEnd", "slice", "map", "concat", "startsWith", "copyWithin", "join", "shift", "deleteProperty", "setPrototypeOf", "find", "entries", "sort", "trim", "unshift", "endsWith", "forEach", "fill", "toString", "indexOf", "get", "split", "every", "lastIndexOf", "filter", "push", "charCodeAt", "getPrototypeOf", "findIndex", "values", "reduce", "preventExtensions", "repeat", "pop", "substring", "some", "codePointAt", "ownKeys", "flatMap", "getOwnPropertyDescriptor", "subarray", "construct", "replace", "set", "flat", "keys"])
}
%NeverOptimizeFunction(main);
main();
