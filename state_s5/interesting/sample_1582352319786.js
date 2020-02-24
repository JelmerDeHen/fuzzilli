function main() {
const v2 = new Uint32Array(637);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
v5.constructor = Int16Array;
const v8 = v5.slice(-2147483649,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["entries", "join", "includes", "reduce", "filter", "fill", "every", "lastIndexOf", "indexOf", "values", "some", "slice", "copyWithin", "reduceRight", "forEach", "map", "keys", "set", "reverse", "sort", "find", "subarray", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
