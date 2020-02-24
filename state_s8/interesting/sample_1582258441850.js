function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
