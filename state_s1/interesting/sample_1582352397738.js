function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = new Int32Array(128);
// v5 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
v5.constructor = Float32Array;
const v7 = v5.slice(v1,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["filter", "copyWithin", "every", "set", "fill", "slice", "subarray", "join", "some", "includes", "reverse", "sort", "keys", "forEach", "indexOf", "entries", "find", "map", "reduce", "reduceRight", "lastIndexOf", "values", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
