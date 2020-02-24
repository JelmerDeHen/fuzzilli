function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = new Int8Array(v1);
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
v4.constructor = Int32Array;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["findIndex", "copyWithin", "keys", "subarray", "indexOf", "some", "reverse", "reduce", "slice", "fill", "sort", "entries", "join", "lastIndexOf", "includes", "every", "values", "reduceRight", "map", "filter", "find", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();
