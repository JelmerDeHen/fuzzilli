function main() {
const v2 = new Int8Array(Int8Array);
// v2 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
v2.constructor = Float32Array;
const v5 = v2.slice(0,1337);
// v5 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "constructor", "__proto__", "length", "buffer"], withMethods: ["reverse", "fill", "includes", "reduceRight", "sort", "find", "filter", "lastIndexOf", "slice", "forEach", "reduce", "keys", "values", "indexOf", "some", "subarray", "copyWithin", "every", "join", "map", "findIndex", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
