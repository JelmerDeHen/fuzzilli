function main() {
const v8 = new Int8Array(1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v9 = v8.indexOf(0,-2147483649);
// v9 = .integer
}
%NeverOptimizeFunction(main);
main();
