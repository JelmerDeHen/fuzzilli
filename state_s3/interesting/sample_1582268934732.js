function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v2.__proto__ = Int32Array;
const v3 = new Int32Array(v2);
// v3 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
}
%NeverOptimizeFunction(main);
main();
