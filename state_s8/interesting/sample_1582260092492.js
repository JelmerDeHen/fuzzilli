function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {b:1337,constructor:v5};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = new Float64Array(25503);
// v13 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = {a:v5,b:v6,toString:4,...Reflect,...v3,...v13,..."undefined",...0};
// v22 = .object(ofGroup: Object, withProperties: ["length", "buffer", "a", "byteLength", "__proto__", "toString", "byteOffset", "constructor", "b"], withMethods: ["split", "filter", "startsWith", "get", "fill", "splice", "setPrototypeOf", "toLocaleString", "forEach", "unshift", "getPrototypeOf", "getOwnPropertyDescriptor", "values", "subarray", "reduceRight", "charCodeAt", "includes", "join", "shift", "repeat", "set", "codePointAt", "concat", "trim", "keys", "push", "findIndex", "deleteProperty", "indexOf", "copyWithin", "flat", "endsWith", "reduce", "charAt", "pop", "sort", "flatMap", "every", "entries", "find", "toString", "map", "preventExtensions", "padStart", "construct", "defineProperty", "some", "replace", "lastIndexOf", "ownKeys", "substring", "slice", "has", "apply", "isExtensible", "reverse", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
