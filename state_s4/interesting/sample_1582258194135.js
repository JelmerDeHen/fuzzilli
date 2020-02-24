function main() {
const v2 = new Uint8Array(8);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
const v3 = v2.buffer;
// v3 = .object()
}
%NeverOptimizeFunction(main);
main();
