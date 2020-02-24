function main() {
const v1 = [-2147483647];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v1[4096] = Number;
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = v1.pop();
// v7 = .unknown
}
%NeverOptimizeFunction(main);
main();
