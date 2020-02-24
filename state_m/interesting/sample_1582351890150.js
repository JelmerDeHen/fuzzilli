function main() {
const v3 = new Float64Array(128);
// v3 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
v3.constructor = Uint16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteLength", "length", "buffer", "byteOffset", "__proto__"], withMethods: ["keys", "reduceRight", "sort", "lastIndexOf", "forEach", "some", "map", "set", "reverse", "fill", "slice", "join", "values", "copyWithin", "findIndex", "filter", "find", "includes", "indexOf", "every", "subarray", "entries", "reduce"])
}
%NeverOptimizeFunction(main);
main();
