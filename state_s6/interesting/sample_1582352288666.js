function main() {
const v2 = new Uint32Array(637);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
v5.constructor = Int16Array;
const v8 = v5.slice(-2147483649,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "keys", "reduceRight", "slice", "forEach", "entries", "copyWithin", "join", "reduce", "find", "set", "subarray", "fill", "includes", "map", "values", "sort", "indexOf", "reverse", "filter", "findIndex", "every", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
