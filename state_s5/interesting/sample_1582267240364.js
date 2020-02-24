function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v4["unscopable"] = Set;
const v6 = {set:Boolean};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v8 = Object.defineProperty(v4,257,v6);
// v8 = .undefined
delete v4["unscopable"];
}
%NeverOptimizeFunction(main);
main();
