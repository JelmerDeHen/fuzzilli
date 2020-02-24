function main() {
const v2 = new Uint8ClampedArray(Int32Array);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
v2.constructor = Int32Array;
const v5 = v2.slice(-42667988,2117265137);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "byteLength", "length", "byteOffset", "constructor"], withMethods: ["map", "subarray", "forEach", "reduceRight", "join", "copyWithin", "findIndex", "entries", "every", "values", "find", "reduce", "some", "lastIndexOf", "reverse", "filter", "fill", "keys", "set", "sort", "includes", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();
