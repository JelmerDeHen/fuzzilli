function main() {
const v2 = new Int8Array(13.37);
// v2 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v4 = new Uint16Array(v2);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
