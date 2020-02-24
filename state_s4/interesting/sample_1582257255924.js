function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
