function main() {
let v1 = 13.37;
const v2 = v1 + 1;
// v2 = .primitive
v1 = v2;
const v3 = [v1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = Math.sin(v3);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
