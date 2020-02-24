function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = Array(3197492984);
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = v6;
v6[v4] = 0;
}
%NeverOptimizeFunction(main);
main();
