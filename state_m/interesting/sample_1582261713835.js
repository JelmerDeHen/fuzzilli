function main() {
let v1 = 1337;
const v5 = [-3895273739];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v6 = v5;
v5[7] = 0;
const v8 = v6.indexOf(v1,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
