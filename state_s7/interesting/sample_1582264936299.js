function main() {
let v2 = 1337;
const v6 = [-3895273739];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = v6;
v6[7] = 1337;
const v8 = v7.indexOf(v2,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
