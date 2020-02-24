function main() {
const v2 = new Uint8ClampedArray(Int32Array);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
v2.constructor = Int32Array;
const v5 = v2.slice(-42667988,2117265137);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["join", "reduce", "keys", "fill", "every", "set", "reduceRight", "values", "find", "reverse", "copyWithin", "filter", "sort", "subarray", "includes", "lastIndexOf", "findIndex", "some", "slice", "entries", "indexOf", "forEach", "map"])
}
%NeverOptimizeFunction(main);
main();
