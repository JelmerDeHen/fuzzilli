function main() {
const v8 = new Int8Array(1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v9 = v8.indexOf(0,-2147483649);
// v9 = .integer
}
%NeverOptimizeFunction(main);
main();
