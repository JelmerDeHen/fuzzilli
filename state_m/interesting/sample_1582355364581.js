function main() {
const v2 = new Uint8ClampedArray(Int32Array);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
v2.constructor = Int32Array;
const v5 = v2.slice(-42667988,2117265137);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "byteOffset", "constructor", "buffer", "byteLength", "__proto__"], withMethods: ["reverse", "findIndex", "keys", "reduceRight", "sort", "slice", "indexOf", "includes", "fill", "copyWithin", "entries", "set", "some", "every", "subarray", "find", "filter", "map", "join", "lastIndexOf", "reduce", "forEach", "values"])
}
%NeverOptimizeFunction(main);
main();
