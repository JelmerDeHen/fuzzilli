function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
