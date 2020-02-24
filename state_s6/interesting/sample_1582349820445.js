function main() {
const v3 = new Uint32Array(128);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
v3.constructor = Int16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "byteLength", "length"], withMethods: ["map", "forEach", "sort", "includes", "indexOf", "findIndex", "join", "find", "reduce", "subarray", "reduceRight", "values", "slice", "fill", "set", "reverse", "some", "keys", "every", "lastIndexOf", "filter", "entries", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
