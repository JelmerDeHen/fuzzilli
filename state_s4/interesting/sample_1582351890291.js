function main() {
const v3 = new Float64Array(128);
// v3 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
v3.constructor = Uint16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["values", "set", "copyWithin", "map", "every", "includes", "slice", "keys", "some", "join", "reverse", "sort", "indexOf", "entries", "forEach", "filter", "find", "subarray", "fill", "reduceRight", "reduce", "lastIndexOf", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
