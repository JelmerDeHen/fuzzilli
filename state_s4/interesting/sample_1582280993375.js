function main() {
const v3 = [1000000000.0,1000000000.0,1337,10];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
