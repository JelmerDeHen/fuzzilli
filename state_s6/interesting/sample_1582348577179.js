function main() {
const v3 = new Int8Array(256);
// v3 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
v3.constructor = Float64Array;
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["map", "some", "copyWithin", "findIndex", "entries", "every", "indexOf", "sort", "lastIndexOf", "reverse", "find", "subarray", "keys", "includes", "reduce", "set", "fill", "values", "join", "slice", "reduceRight", "forEach", "filter"])
}
%NeverOptimizeFunction(main);
main();