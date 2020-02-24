function main() {
const v3 = new Int32Array(256);
// v3 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
v3.constructor = Float64Array;
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["slice", "findIndex", "sort", "keys", "entries", "map", "set", "copyWithin", "some", "indexOf", "subarray", "every", "reverse", "join", "lastIndexOf", "values", "forEach", "filter", "fill", "includes", "reduce", "find", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
