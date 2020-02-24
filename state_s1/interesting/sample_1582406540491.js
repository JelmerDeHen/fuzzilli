function main() {
const v6 = 2.2250738585072014e-308 / 65537;
// v6 = .number
const v8 = ["matchAll",1337,1337,v6];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = new Float64Array(v8);
// v12 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
v12.constructor = Int32Array;
const v14 = v12.slice(isFinite,234126503);
// v14 = .object(ofGroup: Float64Array, withProperties: ["__proto__", "buffer", "byteOffset", "byteLength", "constructor", "length"], withMethods: ["findIndex", "forEach", "keys", "values", "join", "filter", "set", "sort", "reduceRight", "fill", "subarray", "find", "entries", "map", "includes", "slice", "some", "reduce", "copyWithin", "every", "reverse", "lastIndexOf", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
