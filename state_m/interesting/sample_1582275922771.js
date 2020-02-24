function main() {
const v3 = new Int32Array(1337);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
const v4 = v3.includes(undefined,undefined);
// v4 = .boolean
}
%NeverOptimizeFunction(main);
main();
