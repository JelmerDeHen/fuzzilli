function main() {
const v3 = [1000000000.0,1000000000.0,1337,10];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
