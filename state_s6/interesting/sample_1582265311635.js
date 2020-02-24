function main() {
const v8 = new Int8Array(1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v9 = v8.indexOf(0,-2147483649);
// v9 = .integer
}
%NeverOptimizeFunction(main);
main();
