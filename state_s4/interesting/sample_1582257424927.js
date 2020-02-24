function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = Array(3197492984);
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = v6;
v6[v4] = 0;
}
%NeverOptimizeFunction(main);
main();
