function main() {
let v11 = 0;
const v14 = v11 + 1;
// v14 = .primitive
v11 = v14;
const v20 = [13.37,13.37,13.37,13.37,13.37];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v21 = Number(...v20);
// v21 = .number
}
%NeverOptimizeFunction(main);
main();
