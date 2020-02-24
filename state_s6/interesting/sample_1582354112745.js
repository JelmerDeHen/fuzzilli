function main() {
const v4 = new Int16Array(1337);
// v4 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
v4.constructor = Float64Array;
const v6 = v4.slice(parseInt,255);
// v6 = .object(ofGroup: Int16Array, withProperties: ["buffer", "byteLength", "length", "constructor", "__proto__", "byteOffset"], withMethods: ["reduce", "sort", "map", "forEach", "keys", "entries", "reverse", "values", "filter", "join", "copyWithin", "some", "lastIndexOf", "every", "fill", "set", "findIndex", "includes", "indexOf", "subarray", "slice", "reduceRight", "find"])
}
%NeverOptimizeFunction(main);
main();
