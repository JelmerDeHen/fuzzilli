function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = Array(3197492984);
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v7 = v6;
v6[v4] = 0;
}
%NeverOptimizeFunction(main);
main();
