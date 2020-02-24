function main() {
let v2 = 1337;
const v6 = [-3895273739];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v6;
v6[7] = 1337;
const v8 = v7.indexOf(v2,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
