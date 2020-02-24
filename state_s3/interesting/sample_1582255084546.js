function main() {
let v1 = 65537;
let v2 = v1;
const v3 = v1 & v1;
// v3 = .integer
v2 = v2;
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v38 = 0;
const v41 = v38 + 1;
// v41 = .primitive
v38 = v41;
}
%NeverOptimizeFunction(main);
main();
