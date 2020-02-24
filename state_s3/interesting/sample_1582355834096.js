function main() {
const v3 = new Int16Array(1337);
// v3 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
v3.constructor = Int8Array;
const v5 = v3.slice(Int8Array,128);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "byteLength", "byteOffset", "length"], withMethods: ["keys", "reduceRight", "every", "forEach", "slice", "find", "set", "findIndex", "fill", "entries", "map", "reduce", "lastIndexOf", "includes", "indexOf", "values", "sort", "reverse", "filter", "subarray", "copyWithin", "join", "some"])
}
%NeverOptimizeFunction(main);
main();
