function main() {
const v3 = [1000000000.0,1000000000.0,4294967297,10];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = 1337;
const v6 = v5[-2147483647];
// v6 = .unknown
const v8 = new Int32Array(v3);
// v8 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
const v9 = v8.sort(v6);
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();
