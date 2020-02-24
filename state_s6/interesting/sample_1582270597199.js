function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
const v4 = new Uint32Array(v3);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
}
%NeverOptimizeFunction(main);
main();
