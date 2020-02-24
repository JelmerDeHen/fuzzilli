function main() {
let v2 = 1337;
const v6 = [-3895273739];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v7 = v6;
v6[7] = 1337;
const v8 = v7.indexOf(v2,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
