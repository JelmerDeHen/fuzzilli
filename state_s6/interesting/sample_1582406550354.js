function main() {
const v6 = 2.2250738585072014e-308 / 65537;
// v6 = .number
const v8 = ["matchAll",1337,1337,v6];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = new Float64Array(v8);
// v12 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
v12.constructor = Int32Array;
const v14 = v12.slice(isFinite,234126503);
// v14 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "buffer", "__proto__"], withMethods: ["set", "reduceRight", "some", "join", "subarray", "filter", "every", "values", "fill", "indexOf", "findIndex", "sort", "reverse", "forEach", "find", "includes", "map", "lastIndexOf", "reduce", "copyWithin", "keys", "entries", "slice"])
}
%NeverOptimizeFunction(main);
main();
