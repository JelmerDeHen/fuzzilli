function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length", "e", "d"])
let v5 = v4;
delete v5.length;
}
%NeverOptimizeFunction(main);
main();
