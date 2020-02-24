function main() {
const v4 = new Int16Array(1337);
// v4 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
v4.constructor = Float32Array;
const v6 = v4.slice(13.37,128);
// v6 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "byteLength", "byteOffset", "__proto__", "constructor"], withMethods: ["fill", "reverse", "forEach", "map", "find", "set", "copyWithin", "findIndex", "indexOf", "filter", "slice", "subarray", "reduce", "entries", "keys", "includes", "some", "sort", "every", "reduceRight", "values", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
