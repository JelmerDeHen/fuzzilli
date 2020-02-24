function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v4 = new Uint16Array("iterator");
// v4 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
for (const v5 in v4) {
}
}
%NeverOptimizeFunction(main);
main();
