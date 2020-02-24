function main() {
let v2 = 0;
const v3 = v2[3];
// v3 = .unknown
const v5 = new Int32Array(13.37);
// v5 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
const v6 = v5.sort(v3);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
