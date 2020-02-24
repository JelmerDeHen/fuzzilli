function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
v5.constructor = Int8Array;
const v12 = v5.slice(-9007199254740993,1337);
// v12 = .object(ofGroup: Float32Array, withProperties: ["constructor", "byteOffset", "buffer", "length", "byteLength", "__proto__"], withMethods: ["every", "includes", "copyWithin", "entries", "forEach", "find", "filter", "some", "join", "fill", "findIndex", "reduce", "reverse", "reduceRight", "subarray", "set", "lastIndexOf", "map", "slice", "sort", "keys", "values", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
