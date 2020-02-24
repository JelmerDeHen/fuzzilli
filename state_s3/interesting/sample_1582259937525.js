function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {valueOf:v2,length:13.37,d:127,e:127};
// v3 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "e", "__proto__", "length"])
let v4 = v3;
v4 = 127;
const v7 = Object.isSealed(v4);
// v7 = .boolean
}
%NeverOptimizeFunction(main);
main();
