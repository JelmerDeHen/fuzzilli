function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = new Int8Array(v2);
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v5 = v4.reverse();
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
