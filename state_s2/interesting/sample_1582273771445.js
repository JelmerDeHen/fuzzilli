function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = 1337;
const v4 = v3[-2147483647];
// v4 = .unknown
const v6 = new Int32Array(v1);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v7 = v6.sort(v4);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
