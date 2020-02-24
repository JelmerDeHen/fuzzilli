function main() {
let v4 = 0;
let v7 = 0;
let v12 = 13.37;
const v14 = ["object",-3.0,arguments,-3.0,-1000.0];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = v14[v12];
// v15 = .unknown
const v16 = new Int16Array(v14);
// v16 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v17 = v16.sort(v15);
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();
