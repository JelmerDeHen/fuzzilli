function main() {
const v2 = ["matchAll",1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = new Int16Array(v2);
// v6 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
v6.constructor = Int32Array;
const v8 = v6.slice(isFinite,234126503);
// v8 = .object(ofGroup: Int16Array, withProperties: ["buffer", "byteLength", "length", "constructor", "__proto__", "byteOffset"], withMethods: ["reduce", "sort", "map", "forEach", "keys", "entries", "reverse", "values", "filter", "join", "copyWithin", "some", "lastIndexOf", "every", "fill", "set", "findIndex", "includes", "indexOf", "subarray", "slice", "reduceRight", "find"])
}
%NeverOptimizeFunction(main);
main();
