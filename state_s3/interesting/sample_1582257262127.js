function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
