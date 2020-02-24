function main() {
const v3 = new Int32Array(13.37);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
v3.constructor = Int8Array;
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["forEach", "some", "lastIndexOf", "values", "join", "subarray", "reduce", "reduceRight", "reverse", "sort", "keys", "indexOf", "entries", "slice", "findIndex", "find", "copyWithin", "includes", "map", "filter", "every", "fill", "set"])
}
%NeverOptimizeFunction(main);
main();
