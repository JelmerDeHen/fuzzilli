function main() {
let v4 = undefined;
const v8 = 2.2250738585072014e-308 / 65537;
// v8 = .number
const v10 = ["matchAll",1337,1337,v8];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v14 = new Float64Array(v10);
// v14 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
v14.constructor = Uint8Array;
const v16 = v14.slice(isFinite,234126503);
// v16 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "length", "constructor", "byteLength", "__proto__"], withMethods: ["filter", "values", "reduceRight", "includes", "forEach", "fill", "indexOf", "find", "findIndex", "subarray", "reduce", "copyWithin", "sort", "map", "slice", "set", "keys", "entries", "every", "reverse", "some", "lastIndexOf", "join"])
}
%NeverOptimizeFunction(main);
main();
