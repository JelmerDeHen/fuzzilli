function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
const v3 = v2 + 1;
// v3 = .primitive
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = v4 != v3;
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
