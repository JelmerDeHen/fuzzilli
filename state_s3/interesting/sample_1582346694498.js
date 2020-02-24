function main() {
const v3 = new Int8Array(1337);
// v3 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
v3.constructor = Uint32Array;
const v6 = v3.slice(-1,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["findIndex", "copyWithin", "keys", "subarray", "indexOf", "some", "reverse", "reduce", "slice", "fill", "sort", "entries", "join", "lastIndexOf", "includes", "every", "values", "reduceRight", "map", "filter", "find", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();
