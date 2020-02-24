function main() {
const v6 = 2.2250738585072014e-308 / 65537;
// v6 = .number
const v8 = ["matchAll",1337,1337,v6];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = new Float64Array(v8);
// v12 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
v12.constructor = Int32Array;
const v14 = v12.slice(isFinite,234126503);
// v14 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "__proto__", "byteLength", "buffer", "byteOffset"], withMethods: ["slice", "includes", "entries", "keys", "map", "set", "join", "values", "forEach", "every", "reverse", "indexOf", "reduce", "lastIndexOf", "find", "sort", "copyWithin", "findIndex", "filter", "some", "subarray", "reduceRight", "fill"])
}
%NeverOptimizeFunction(main);
main();
