function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
v3.constructor = Int8Array;
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["filter", "copyWithin", "every", "set", "fill", "slice", "subarray", "join", "some", "includes", "reverse", "sort", "keys", "forEach", "indexOf", "entries", "find", "map", "reduce", "reduceRight", "lastIndexOf", "values", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
