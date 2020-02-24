function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {valueOf:v2,length:13.37,d:127,e:127};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "e", "length"])
let v4 = v3;
delete v4.e;
}
%NeverOptimizeFunction(main);
main();
