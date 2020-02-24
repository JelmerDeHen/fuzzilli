function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v4 = v1;
v4[127] = v3;
const v6 = (1337)[257];
// v6 = .unknown
const v8 = new Float64Array(v4);
// v8 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v9 = v8.sort(v6);
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();
