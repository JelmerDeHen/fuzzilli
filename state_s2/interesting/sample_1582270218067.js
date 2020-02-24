function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = new Int8Array(v2);
// v4 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
const v5 = v4.reverse();
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
