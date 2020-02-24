function main() {
const v3 = new Float64Array(128);
// v3 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
v3.constructor = Uint16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["__proto__", "buffer", "byteOffset", "byteLength", "constructor", "length"], withMethods: ["findIndex", "forEach", "keys", "values", "join", "filter", "set", "sort", "reduceRight", "fill", "subarray", "find", "entries", "map", "includes", "slice", "some", "reduce", "copyWithin", "every", "reverse", "lastIndexOf", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
