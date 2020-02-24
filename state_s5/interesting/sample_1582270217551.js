function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = new Int8Array(v2);
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v5 = v4.reverse();
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
