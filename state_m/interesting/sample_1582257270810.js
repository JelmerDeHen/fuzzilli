function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {get:Array,set:Array};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
v5[9007199254740993] = 13.37;
const v7 = Object.defineProperty(v3,65536,v5);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
