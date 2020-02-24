function main() {
let v2 = 3111507107;
const v3 = v2[3];
// v3 = .unknown
const v5 = new Int32Array(Uint32Array);
// v5 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v6 = v5.sort(v3);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
