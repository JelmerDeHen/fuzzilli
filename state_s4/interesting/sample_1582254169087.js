function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v2[v6] = Array;
const v8 = Symbol.species;
// v8 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v0[v8] = "string";
}
%NeverOptimizeFunction(main);
main();
