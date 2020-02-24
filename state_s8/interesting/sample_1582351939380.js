function main() {
const v4 = new Int16Array(7);
// v4 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
v4.constructor = Int8Array;
const v7 = v4.slice(-1024,2608792922);
// v7 = .object(ofGroup: Int16Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "constructor", "byteLength"], withMethods: ["set", "map", "join", "find", "subarray", "reverse", "findIndex", "reduce", "indexOf", "includes", "forEach", "copyWithin", "every", "fill", "sort", "keys", "entries", "filter", "some", "reduceRight", "lastIndexOf", "values", "slice"])
}
%NeverOptimizeFunction(main);
main();
