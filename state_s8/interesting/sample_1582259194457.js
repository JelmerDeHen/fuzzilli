function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = new Uint16Array("iterator");
// v4 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
for (const v5 in v4) {
}
}
%NeverOptimizeFunction(main);
main();
