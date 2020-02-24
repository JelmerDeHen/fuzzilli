function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = 257;
const v5 = v4 + 1;
// v5 = .primitive
let v7 = 0;
v2[v5] = v7;
const v9 = Object.entries(v1);
// v9 = .object()
}
%NeverOptimizeFunction(main);
main();
