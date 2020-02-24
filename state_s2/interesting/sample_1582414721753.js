function main() {
let v4 = undefined;
const v8 = 2.2250738585072014e-308 / 65537;
// v8 = .number
const v10 = ["matchAll",1337,1337,v8];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = new Float64Array(v10);
// v14 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
v14.constructor = Uint8Array;
const v16 = v14.slice(isFinite,234126503);
// v16 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["set", "reduce", "values", "fill", "map", "join", "subarray", "filter", "findIndex", "keys", "some", "reduceRight", "slice", "includes", "lastIndexOf", "copyWithin", "find", "forEach", "reverse", "sort", "entries", "every", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
