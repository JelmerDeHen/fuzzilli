function main() {
const v3 = new Int32Array(1337);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
const v4 = v3.includes(undefined,undefined);
// v4 = .boolean
}
%NeverOptimizeFunction(main);
main();
