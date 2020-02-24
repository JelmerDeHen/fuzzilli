function main() {
const v6 = new Uint16Array(1337);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
v6.constructor = Uint32Array;
const v9 = v6.slice(-2538985663,256);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "length", "constructor", "byteOffset", "__proto__", "byteLength"], withMethods: ["subarray", "indexOf", "join", "slice", "lastIndexOf", "find", "forEach", "sort", "values", "fill", "set", "reverse", "keys", "reduce", "reduceRight", "findIndex", "copyWithin", "map", "some", "filter", "includes", "entries", "every"])
}
%NeverOptimizeFunction(main);
main();
