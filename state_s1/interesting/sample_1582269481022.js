function main() {
const v4 = new Int8Array(1337);
// v4 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v5 = v4.includes(1,-2147483649);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
