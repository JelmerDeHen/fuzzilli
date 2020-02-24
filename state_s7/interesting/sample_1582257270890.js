function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {get:Array,set:Array};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
v5[9007199254740993] = 13.37;
const v7 = Object.defineProperty(v3,65536,v5);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
