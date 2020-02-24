function main() {
const v2 = "hasInstance"[1073741824];
// v2 = .unknown
const v4 = new Uint32Array(13.37);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
const v5 = v4.sort(v2);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
