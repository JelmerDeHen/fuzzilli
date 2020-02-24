function main() {
const v3 = new Int16Array(1337);
// v3 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
v3.constructor = Int8Array;
const v5 = v3.slice(Int8Array,128);
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "length", "byteLength", "byteOffset", "buffer", "__proto__"], withMethods: ["some", "sort", "fill", "find", "includes", "set", "every", "lastIndexOf", "copyWithin", "forEach", "reduce", "entries", "findIndex", "reverse", "keys", "filter", "indexOf", "map", "subarray", "reduceRight", "join", "values", "slice"])
}
%NeverOptimizeFunction(main);
main();
