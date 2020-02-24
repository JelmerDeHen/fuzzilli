function main() {
const v3 = new Int8Array(1337);
// v3 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
v3.constructor = Float64Array;
const v6 = v3.slice(-1,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "buffer", "constructor", "length", "byteOffset"], withMethods: ["every", "slice", "reverse", "values", "filter", "findIndex", "reduceRight", "includes", "subarray", "fill", "reduce", "find", "sort", "map", "entries", "keys", "set", "indexOf", "copyWithin", "some", "forEach", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
