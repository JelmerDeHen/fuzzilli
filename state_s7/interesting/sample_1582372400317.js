function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = new Float32Array(v1);
// v4 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
v4.constructor = Int8Array;
const v7 = v4.slice(-2847526874,234126503);
// v7 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteOffset", "byteLength", "buffer", "length", "constructor"], withMethods: ["every", "subarray", "join", "lastIndexOf", "findIndex", "reverse", "map", "entries", "find", "keys", "set", "indexOf", "reduce", "some", "includes", "copyWithin", "sort", "slice", "forEach", "reduceRight", "values", "filter", "fill"])
}
%NeverOptimizeFunction(main);
main();
