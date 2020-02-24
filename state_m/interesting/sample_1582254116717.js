function main() {
const v10 = {get:Array};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(Array,"length",v10);
// v12 = .undefined
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v20 = {valueOf:v19,length:13.37,d:127,e:127};
// v20 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d", "valueOf", "length"])
const v21 = 1 != v12;
// v21 = .boolean
}
%NeverOptimizeFunction(main);
main();
