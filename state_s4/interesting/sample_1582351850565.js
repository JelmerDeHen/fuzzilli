function main() {
const v3 = new Uint8Array(1337);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
v3.constructor = Float64Array;
const v6 = v3.slice(7,1337);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "constructor", "__proto__"], withMethods: ["indexOf", "keys", "every", "subarray", "findIndex", "reduce", "entries", "values", "reverse", "set", "join", "fill", "filter", "find", "slice", "sort", "includes", "forEach", "some", "lastIndexOf", "reduceRight", "map", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
