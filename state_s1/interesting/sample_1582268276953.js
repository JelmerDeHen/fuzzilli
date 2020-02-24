function main() {
let v2 = 3111507107;
const v3 = v2[3];
// v3 = .unknown
const v5 = new Int32Array(Uint32Array);
// v5 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
const v6 = v5.sort(v3);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
