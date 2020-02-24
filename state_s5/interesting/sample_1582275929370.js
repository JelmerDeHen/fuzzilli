function main() {
const v3 = new Int32Array(1337);
// v3 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
const v4 = v3.includes(undefined,undefined);
// v4 = .boolean
}
%NeverOptimizeFunction(main);
main();
