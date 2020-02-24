function main() {
let v4 = 0;
let v7 = 0;
let v12 = 13.37;
const v14 = ["object",-3.0,arguments,-3.0,-1000.0];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = v14[v12];
// v15 = .unknown
const v16 = new Int16Array(v14);
// v16 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
const v17 = v16.sort(v15);
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();
