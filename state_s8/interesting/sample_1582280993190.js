function main() {
const v3 = [1000000000.0,1000000000.0,1337,10];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
