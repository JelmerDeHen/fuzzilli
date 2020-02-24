function main() {
const v3 = new Float32Array(1337);
// v3 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
v3.constructor = Uint32Array;
const v6 = v3.slice(10,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["buffer", "byteLength", "constructor", "byteOffset", "length", "__proto__"], withMethods: ["set", "entries", "reduce", "lastIndexOf", "map", "join", "values", "sort", "some", "includes", "keys", "reverse", "find", "filter", "every", "copyWithin", "fill", "findIndex", "forEach", "subarray", "reduceRight", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();
