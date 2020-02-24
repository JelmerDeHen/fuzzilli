function main() {
const v3 = new Float64Array(128);
// v3 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
v3.constructor = Uint16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["__proto__", "length", "byteLength", "buffer", "constructor", "byteOffset"], withMethods: ["every", "reduce", "lastIndexOf", "findIndex", "reverse", "includes", "forEach", "some", "join", "find", "indexOf", "set", "reduceRight", "slice", "values", "filter", "map", "copyWithin", "fill", "keys", "entries", "subarray", "sort"])
}
%NeverOptimizeFunction(main);
main();
