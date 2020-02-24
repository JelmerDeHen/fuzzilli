function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v3["unscopable"] = Set;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
delete v3["unscopable"];
}
%NeverOptimizeFunction(main);
main();
