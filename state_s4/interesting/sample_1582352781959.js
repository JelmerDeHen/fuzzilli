function main() {
const v3 = new Int32Array(13.37);
// v3 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
v3.constructor = Int8Array;
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["find", "forEach", "entries", "subarray", "reduce", "fill", "set", "lastIndexOf", "every", "slice", "findIndex", "some", "join", "reverse", "indexOf", "keys", "filter", "copyWithin", "sort", "reduceRight", "map", "includes", "values"])
}
%NeverOptimizeFunction(main);
main();
