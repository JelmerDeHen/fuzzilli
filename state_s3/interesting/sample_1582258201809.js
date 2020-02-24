function main() {
const v2 = new Uint8Array(8);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
const v3 = v2.buffer;
// v3 = .object()
}
%NeverOptimizeFunction(main);
main();
