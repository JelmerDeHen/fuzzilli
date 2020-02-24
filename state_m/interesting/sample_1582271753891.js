function main() {
const v2 = new Int32Array(256);
// v2 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
const v3 = v2.fill();
// v3 = .undefined
}
%NeverOptimizeFunction(main);
main();
