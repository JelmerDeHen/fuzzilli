function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = v0[v2];
// v3 = .unknown
const v10 = "object".constructor;
// v10 = .function()
const v12 = Symbol.species;
// v12 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v14 = v10(v12,0);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
