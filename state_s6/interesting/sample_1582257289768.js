function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = v0[v2];
// v3 = .unknown
const v10 = "object".constructor;
// v10 = .function()
const v12 = Symbol.species;
// v12 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v14 = v10(v12,0);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
