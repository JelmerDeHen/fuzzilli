function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = Array(3197492984);
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = v6;
v6[v4] = 0;
}
%NeverOptimizeFunction(main);
main();
