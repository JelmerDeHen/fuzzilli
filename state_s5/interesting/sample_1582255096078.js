function main() {
let v1 = 65537;
let v2 = v1;
const v3 = v1 & v1;
// v3 = .integer
v2 = v2;
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v38 = 0;
const v41 = v38 + 1;
// v41 = .primitive
v38 = v41;
}
%NeverOptimizeFunction(main);
main();
