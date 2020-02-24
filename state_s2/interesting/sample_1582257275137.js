function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {get:Array,set:Array};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
v5[9007199254740993] = 13.37;
const v7 = Object.defineProperty(v3,65536,v5);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
