function main() {
let v1 = 13.37;
const v2 = v1 + 1;
// v2 = .primitive
v1 = v2;
const v3 = [v1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = Math.sin(v3);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
