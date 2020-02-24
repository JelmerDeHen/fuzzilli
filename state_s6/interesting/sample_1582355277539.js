function main() {
const v7 = new Float64Array(1337);
// v7 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
v7.constructor = Float32Array;
const v9 = v7.slice(Uint8Array,234126503);
// v9 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "buffer", "__proto__"], withMethods: ["set", "reduceRight", "some", "join", "subarray", "filter", "every", "values", "fill", "indexOf", "findIndex", "sort", "reverse", "forEach", "find", "includes", "map", "lastIndexOf", "reduce", "copyWithin", "keys", "entries", "slice"])
}
%NeverOptimizeFunction(main);
main();
