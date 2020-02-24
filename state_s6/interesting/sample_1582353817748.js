function main() {
const v3 = new Uint8Array(1337);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
v3.constructor = Int32Array;
const v5 = v3.slice(Int32Array,1337);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteOffset", "byteLength", "constructor", "length", "buffer"], withMethods: ["sort", "set", "map", "reduce", "reverse", "entries", "filter", "subarray", "includes", "find", "join", "values", "copyWithin", "findIndex", "keys", "some", "fill", "forEach", "reduceRight", "slice", "indexOf", "every", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
