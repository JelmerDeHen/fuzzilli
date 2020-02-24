function main() {
const v3 = new Float64Array(128);
// v3 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
v3.constructor = Uint16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "indexOf", "copyWithin", "reduce", "every", "lastIndexOf", "forEach", "entries", "filter", "set", "includes", "find", "reverse", "fill", "sort", "some", "subarray", "keys", "join", "map", "slice", "values"])
}
%NeverOptimizeFunction(main);
main();
