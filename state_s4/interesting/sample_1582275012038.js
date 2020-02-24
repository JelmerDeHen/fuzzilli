function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v13 = [-1000000000.0];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v15 = v13;
const v16 = Math.pow(v15,-3455216442);
// v16 = .number
}
%NeverOptimizeFunction(main);
main();
