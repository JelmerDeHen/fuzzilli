function main() {
const v6 = new Uint16Array(1337);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
v6.constructor = Uint32Array;
const v9 = v6.slice(-2538985663,256);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "length", "byteOffset", "byteLength", "constructor"], withMethods: ["findIndex", "subarray", "values", "slice", "entries", "sort", "filter", "includes", "every", "some", "reduceRight", "reverse", "fill", "forEach", "copyWithin", "set", "join", "keys", "find", "lastIndexOf", "reduce", "indexOf", "map"])
}
%NeverOptimizeFunction(main);
main();
