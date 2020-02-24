function main() {
let v1 = 13.37;
const v2 = v1 + 1;
// v2 = .primitive
v1 = v2;
const v3 = [v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = Math.sin(v3);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
