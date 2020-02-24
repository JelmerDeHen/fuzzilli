function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
v4["unscopable"] = Set;
const v6 = {set:Boolean};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v8 = Object.defineProperty(v4,257,v6);
// v8 = .undefined
delete v4["unscopable"];
}
%NeverOptimizeFunction(main);
main();
