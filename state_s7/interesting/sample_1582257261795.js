function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
