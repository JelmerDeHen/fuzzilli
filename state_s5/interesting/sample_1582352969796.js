function main() {
const v3 = new Float32Array(1337);
// v3 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
v3.constructor = Float64Array;
const v6 = v3.slice(-1,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["entries", "join", "includes", "reduce", "filter", "fill", "every", "lastIndexOf", "indexOf", "values", "some", "slice", "copyWithin", "reduceRight", "forEach", "map", "keys", "set", "reverse", "sort", "find", "subarray", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
