function main() {
let v1 = 13.37;
const v2 = v1 + 1;
// v2 = .primitive
v1 = v2;
const v3 = [v1];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = Math.sin(v3);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
