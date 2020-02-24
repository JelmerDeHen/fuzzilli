function main() {
let v2 = 0;
const v3 = v2[3];
// v3 = .unknown
const v5 = new Int32Array(13.37);
// v5 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
const v6 = v5.sort(v3);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
