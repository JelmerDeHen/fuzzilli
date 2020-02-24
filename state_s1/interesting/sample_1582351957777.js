function main() {
const v4 = new Int16Array(7);
// v4 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
v4.constructor = Int8Array;
const v7 = v4.slice(-1024,2608792922);
// v7 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "byteLength", "constructor", "length", "byteOffset"], withMethods: ["reduce", "fill", "subarray", "find", "keys", "filter", "some", "indexOf", "join", "findIndex", "entries", "slice", "reverse", "copyWithin", "sort", "includes", "map", "every", "lastIndexOf", "values", "reduceRight", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();
