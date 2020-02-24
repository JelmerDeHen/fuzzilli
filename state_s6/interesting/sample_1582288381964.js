function main() {
const v2 = new Int8Array(1337);
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
function v7(v8,v9,v10,v11,v12) {
    'use strict'
}
let v14 = "jZZhI/kPfh";
const v15 = [v7,-3170815044,v4];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v16 = [v14,v15];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v18 = v16;
const v19 = JSON.stringify(v18);
// v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v20 = JSON.parse(v19,1337);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
