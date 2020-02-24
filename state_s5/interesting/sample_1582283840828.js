function main() {
const v4 = [2.2250738585072014e-308,13.37,1337,2.2250738585072014e-308];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v6 = 1337;
const v7 = v6[-2147483647];
// v7 = .unknown
const v9 = new Uint8ClampedArray(v4);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v10 = v9.sort(v7);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();
