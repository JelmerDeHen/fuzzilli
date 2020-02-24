function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {get:Array,set:Array};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
v5[9007199254740993] = 13.37;
const v7 = Object.defineProperty(v3,65536,v5);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
