function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
v3.constructor = Int8Array;
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["map", "subarray", "lastIndexOf", "every", "forEach", "indexOf", "find", "filter", "copyWithin", "includes", "keys", "reduce", "entries", "fill", "values", "findIndex", "some", "join", "reduceRight", "slice", "set", "sort", "reverse"])
}
%NeverOptimizeFunction(main);
main();
