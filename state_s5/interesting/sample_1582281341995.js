function main() {
const v2 = "hasInstance"[1073741824];
// v2 = .unknown
const v4 = new Uint32Array(13.37);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
const v5 = v4.sort(v2);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
