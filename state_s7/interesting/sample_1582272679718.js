function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
let v7 = 0;
v2[v5] = v7;
const v9 = Object.entries(v1);
// v9 = .object()
}
%NeverOptimizeFunction(main);
main();
