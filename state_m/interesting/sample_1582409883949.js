function main() {
let v4 = undefined;
const v8 = 2.2250738585072014e-308 / 65537;
// v8 = .number
const v10 = ["matchAll",1337,1337,v8];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = new Float64Array(v10);
// v14 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
v14.constructor = Uint8Array;
const v16 = v14.slice(isFinite,234126503);
// v16 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteLength", "length", "buffer", "byteOffset", "__proto__"], withMethods: ["keys", "reduceRight", "sort", "lastIndexOf", "forEach", "some", "map", "set", "reverse", "fill", "slice", "join", "values", "copyWithin", "findIndex", "filter", "find", "includes", "indexOf", "every", "subarray", "entries", "reduce"])
}
%NeverOptimizeFunction(main);
main();
