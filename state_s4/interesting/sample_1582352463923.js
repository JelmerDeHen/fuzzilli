function main() {
const v7 = new Int8Array(13.37);
// v7 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
v7.constructor = Float32Array;
const v10 = v7.slice(3,1337);
// v10 = .object(ofGroup: Int8Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["find", "filter", "reverse", "sort", "map", "entries", "every", "set", "reduce", "findIndex", "join", "lastIndexOf", "keys", "forEach", "includes", "some", "subarray", "reduceRight", "values", "fill", "copyWithin", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();
