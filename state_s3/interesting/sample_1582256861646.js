function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {set:gc};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v6 = Object.defineProperty(v2,0,v4);
// v6 = .undefined
v2.length = 2;
}
%NeverOptimizeFunction(main);
main();
