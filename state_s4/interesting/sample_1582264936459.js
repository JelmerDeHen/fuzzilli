function main() {
let v2 = 1337;
const v6 = [-3895273739];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = v6;
v6[7] = 1337;
const v8 = v7.indexOf(v2,-9007199254740991);
// v8 = .integer
}
%NeverOptimizeFunction(main);
main();
