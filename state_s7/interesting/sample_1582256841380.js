function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {set:gc};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v6 = Object.defineProperty(v2,0,v4);
// v6 = .undefined
v2.length = 2;
}
%NeverOptimizeFunction(main);
main();
