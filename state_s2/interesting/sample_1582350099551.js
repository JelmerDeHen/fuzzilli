function main() {
const v4 = new Int8Array(1337);
// v4 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
v4.constructor = Uint32Array;
const v6 = v4.slice(13.37,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "constructor", "__proto__", "length", "buffer"], withMethods: ["reverse", "fill", "includes", "reduceRight", "sort", "find", "filter", "lastIndexOf", "slice", "forEach", "reduce", "keys", "values", "indexOf", "some", "subarray", "copyWithin", "every", "join", "map", "findIndex", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
