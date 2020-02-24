function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = new Int8Array(v2);
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v5 = v4.reverse();
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
