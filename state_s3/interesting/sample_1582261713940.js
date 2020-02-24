function main() {
let v1 = 1337;
const v5 = [-3895273739];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v6 = v5;
v5[7] = 0;
const v8 = v6.indexOf(v1,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
