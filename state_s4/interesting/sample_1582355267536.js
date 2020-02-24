function main() {
const v7 = new Float64Array(1337);
// v7 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
v7.constructor = Float32Array;
const v9 = v7.slice(Uint8Array,234126503);
// v9 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["values", "set", "copyWithin", "map", "every", "includes", "slice", "keys", "some", "join", "reverse", "sort", "indexOf", "entries", "forEach", "filter", "find", "subarray", "fill", "reduceRight", "reduce", "lastIndexOf", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
