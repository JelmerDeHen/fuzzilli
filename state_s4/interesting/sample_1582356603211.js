function main() {
const v4 = new Uint8Array(128);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
v4.constructor = Int8Array;
const v5 = v4.slice(Reflect,128);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "constructor", "__proto__"], withMethods: ["indexOf", "keys", "every", "subarray", "findIndex", "reduce", "entries", "values", "reverse", "set", "join", "fill", "filter", "find", "slice", "sort", "includes", "forEach", "some", "lastIndexOf", "reduceRight", "map", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
