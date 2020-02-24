function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v4["unscopable"] = Set;
const v6 = {set:Boolean};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v8 = Object.defineProperty(v4,257,v6);
// v8 = .undefined
delete v4["unscopable"];
}
%NeverOptimizeFunction(main);
main();
