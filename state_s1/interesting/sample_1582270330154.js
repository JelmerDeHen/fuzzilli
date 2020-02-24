function main() {
let v2 = 0;
const v6 = v2 + 1;
// v6 = .primitive
v2 = v6;
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = 0;
v12 = v8;
const v13 = Math.atan2(v12,-303776.46538515715);
// v13 = .number
}
%NeverOptimizeFunction(main);
main();
