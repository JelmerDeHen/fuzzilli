function main() {
const v8 = new Int8Array(1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
const v9 = v8.indexOf(0,-2147483649);
// v9 = .integer
}
%NeverOptimizeFunction(main);
main();
