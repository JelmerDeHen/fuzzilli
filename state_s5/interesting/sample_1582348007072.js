function main() {
const v3 = new Int8Array(1337);
// v3 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
v3.constructor = Float64Array;
const v6 = v3.slice(-1,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "byteOffset", "length", "__proto__", "byteLength", "buffer"], withMethods: ["join", "entries", "reduce", "fill", "reduceRight", "slice", "reverse", "findIndex", "set", "sort", "every", "copyWithin", "includes", "indexOf", "filter", "keys", "subarray", "find", "forEach", "map", "lastIndexOf", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
