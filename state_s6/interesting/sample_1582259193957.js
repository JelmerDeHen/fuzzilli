function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = new Uint16Array("iterator");
// v4 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
for (const v5 in v4) {
}
}
%NeverOptimizeFunction(main);
main();
