function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = new Proxy(v2,v4);
// v6 = .unknown
const v7 = ~v6;
// v7 = .boolean
}
%NeverOptimizeFunction(main);
main();
