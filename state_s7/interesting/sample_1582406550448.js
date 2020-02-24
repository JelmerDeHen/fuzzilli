function main() {
const v6 = 2.2250738585072014e-308 / 65537;
// v6 = .number
const v8 = ["matchAll",1337,1337,v6];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = new Float64Array(v8);
// v12 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
v12.constructor = Int32Array;
const v14 = v12.slice(isFinite,234126503);
// v14 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "length", "constructor", "byteLength", "__proto__"], withMethods: ["filter", "values", "reduceRight", "includes", "forEach", "fill", "indexOf", "find", "findIndex", "subarray", "reduce", "copyWithin", "sort", "map", "slice", "set", "keys", "entries", "every", "reverse", "some", "lastIndexOf", "join"])
}
%NeverOptimizeFunction(main);
main();
