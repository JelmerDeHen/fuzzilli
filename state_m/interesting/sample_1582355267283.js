function main() {
const v7 = new Float64Array(1337);
// v7 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
v7.constructor = Float32Array;
const v9 = v7.slice(Uint8Array,234126503);
// v9 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteLength", "length", "buffer", "byteOffset", "__proto__"], withMethods: ["keys", "reduceRight", "sort", "lastIndexOf", "forEach", "some", "map", "set", "reverse", "fill", "slice", "join", "values", "copyWithin", "findIndex", "filter", "find", "includes", "indexOf", "every", "subarray", "entries", "reduce"])
}
%NeverOptimizeFunction(main);
main();
