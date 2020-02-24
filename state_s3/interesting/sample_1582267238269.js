function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v4["unscopable"] = Set;
const v6 = {set:Boolean};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v8 = Object.defineProperty(v4,257,v6);
// v8 = .undefined
delete v4["unscopable"];
}
%NeverOptimizeFunction(main);
main();
