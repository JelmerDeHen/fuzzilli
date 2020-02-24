function main() {
let v1 = 1337;
const v5 = [-3895273739];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v6 = v5;
v5[7] = 0;
const v8 = v6.indexOf(v1,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
