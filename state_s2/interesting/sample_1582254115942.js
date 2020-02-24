function main() {
const v10 = {get:Array};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(Array,"length",v10);
// v12 = .undefined
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v20 = {valueOf:v19,length:13.37,d:127,e:127};
// v20 = .object(ofGroup: Object, withProperties: ["d", "length", "valueOf", "e", "__proto__"])
const v21 = 1 != v12;
// v21 = .boolean
}
%NeverOptimizeFunction(main);
main();
