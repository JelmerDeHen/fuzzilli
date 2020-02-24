function main() {
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v12 = Symbol.unscopables;
// v12 = .unknown
const v13 = v12[v12];
// v13 = .unknown
const v23 = Array(2815038421);
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
%NeverOptimizeFunction(main);
main();
