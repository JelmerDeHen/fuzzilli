function main() {
let v1 = 1337;
const v5 = [-3895273739];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v6 = v5;
v5[7] = 0;
const v8 = v6.indexOf(v1,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
