function main() {
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v16 = ~v15;
// v16 = .boolean
}
%NeverOptimizeFunction(main);
main();
