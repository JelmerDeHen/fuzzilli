function main() {
const v2 = "hasInstance"[1073741824];
// v2 = .unknown
const v4 = new Uint32Array(13.37);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
const v5 = v4.sort(v2);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
