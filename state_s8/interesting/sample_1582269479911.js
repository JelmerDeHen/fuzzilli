function main() {
const v4 = new Int8Array(1337);
// v4 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v5 = v4.includes(1,-2147483649);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
