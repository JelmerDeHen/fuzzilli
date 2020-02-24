function main() {
const v2 = new Uint32Array(637);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
v5.constructor = Int16Array;
const v8 = v5.slice(-2147483649,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["constructor", "byteOffset", "buffer", "length", "byteLength", "__proto__"], withMethods: ["every", "includes", "copyWithin", "entries", "forEach", "find", "filter", "some", "join", "fill", "findIndex", "reduce", "reverse", "reduceRight", "subarray", "set", "lastIndexOf", "map", "slice", "sort", "keys", "values", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
