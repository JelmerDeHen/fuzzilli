function main() {
const v4 = new Int8Array(1337);
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v5 = v4.includes(1,-2147483649);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
