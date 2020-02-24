function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {get:Array,set:Array};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
v5[9007199254740993] = 13.37;
const v7 = Object.defineProperty(v3,65536,v5);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
