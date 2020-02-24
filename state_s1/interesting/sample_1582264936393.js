function main() {
let v2 = 1337;
const v6 = [-3895273739];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = v6;
v6[7] = 1337;
const v8 = v7.indexOf(v2,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
