function main() {
const v3 = [1000000000.0,1000000000.0,1337,10];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = 1337;
const v6 = v5[1073741824];
// v6 = .unknown
const v8 = Object(v3);
// v8 = .object()
const v9 = v8.sort(v6);
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();
