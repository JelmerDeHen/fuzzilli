function main() {
const v4 = new Uint16Array(1337);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
v4.constructor = Uint32Array;
const v6 = v4.slice(-2538985663,13.37);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "buffer", "length", "constructor", "byteLength", "__proto__"], withMethods: ["subarray", "reduceRight", "indexOf", "find", "sort", "slice", "filter", "reduce", "join", "includes", "keys", "map", "entries", "set", "some", "reverse", "findIndex", "lastIndexOf", "values", "every", "copyWithin", "fill", "forEach"])
}
%NeverOptimizeFunction(main);
main();
