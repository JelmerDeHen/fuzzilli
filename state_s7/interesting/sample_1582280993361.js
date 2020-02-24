function main() {
const v3 = [1000000000.0,1000000000.0,1337,10];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
