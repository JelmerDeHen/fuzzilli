function main() {
let v1 = 13.37;
const v2 = v1 + 1;
// v2 = .primitive
v1 = v2;
const v3 = [v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = Math.sin(v3);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
