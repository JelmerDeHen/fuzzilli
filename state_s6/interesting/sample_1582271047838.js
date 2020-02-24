function main() {
const v2 = new Uint32Array(256);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
const v3 = v2.fill();
// v3 = .undefined
}
%NeverOptimizeFunction(main);
main();
