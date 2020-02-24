function main() {
const v2 = new Uint8Array(8);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
const v3 = v2.buffer;
// v3 = .object()
}
%NeverOptimizeFunction(main);
main();
