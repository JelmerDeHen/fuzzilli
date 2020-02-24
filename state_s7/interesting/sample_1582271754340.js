function main() {
const v2 = new Int32Array(256);
// v2 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
const v3 = v2.fill();
// v3 = .undefined
}
%NeverOptimizeFunction(main);
main();
