function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v3["unscopable"] = Set;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
delete v3["unscopable"];
}
%NeverOptimizeFunction(main);
main();
