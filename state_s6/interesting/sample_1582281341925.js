function main() {
const v2 = "hasInstance"[1073741824];
// v2 = .unknown
const v4 = new Uint32Array(13.37);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
const v5 = v4.sort(v2);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
