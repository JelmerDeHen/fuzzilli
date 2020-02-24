function main() {
const v6 = new Uint16Array(1337);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
v6.constructor = Uint32Array;
const v9 = v6.slice(-2538985663,256);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["length", "buffer", "__proto__", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "entries", "subarray", "join", "values", "every", "lastIndexOf", "includes", "keys", "fill", "findIndex", "indexOf", "reverse", "some", "sort", "reduce", "reduceRight", "forEach", "find", "slice", "map", "filter", "set"])
}
%NeverOptimizeFunction(main);
main();
