function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = new Proxy(v3,v5);
// v7 = .unknown
const v9 = Number(13.37);
// v9 = .number
const v11 = Symbol.iterator;
// v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v7[v11] = v9;
}
%NeverOptimizeFunction(main);
main();
