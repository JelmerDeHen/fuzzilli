function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = new Proxy(v3,v5);
// v7 = .unknown
const v9 = Number(13.37);
// v9 = .number
const v11 = Symbol.iterator;
// v11 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v7[v11] = v9;
}
%NeverOptimizeFunction(main);
main();
