function main() {
let v2 = 0;
const v3 = v2[3];
// v3 = .unknown
const v5 = new Int32Array(13.37);
// v5 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v6 = v5.sort(v3);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
