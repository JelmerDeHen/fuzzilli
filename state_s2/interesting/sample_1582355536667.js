function main() {
const v3 = new Float32Array(13.37);
// v3 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
v3.constructor = Float64Array;
const v6 = v3.slice(6,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["constructor", "byteOffset", "buffer", "length", "byteLength", "__proto__"], withMethods: ["every", "includes", "copyWithin", "entries", "forEach", "find", "filter", "some", "join", "fill", "findIndex", "reduce", "reverse", "reduceRight", "subarray", "set", "lastIndexOf", "map", "slice", "sort", "keys", "values", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
