function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = new Proxy(v2,v4);
// v6 = .unknown
const v7 = ~v6;
// v7 = .boolean
}
%NeverOptimizeFunction(main);
main();
