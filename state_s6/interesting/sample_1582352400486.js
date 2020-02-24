function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = new Int32Array(128);
// v5 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
v5.constructor = Float32Array;
const v7 = v5.slice(v1,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["some", "values", "find", "subarray", "slice", "indexOf", "entries", "filter", "join", "forEach", "findIndex", "every", "keys", "sort", "includes", "set", "lastIndexOf", "reduce", "fill", "reduceRight", "copyWithin", "map", "reverse"])
}
%NeverOptimizeFunction(main);
main();
