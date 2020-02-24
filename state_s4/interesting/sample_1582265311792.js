function main() {
const v8 = new Int8Array(1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v9 = v8.indexOf(0,-2147483649);
// v9 = .integer
}
%NeverOptimizeFunction(main);
main();
