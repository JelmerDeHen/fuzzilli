function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v4["unscopable"] = Set;
const v6 = {set:Boolean};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v8 = Object.defineProperty(v4,257,v6);
// v8 = .undefined
delete v4["unscopable"];
}
%NeverOptimizeFunction(main);
main();
