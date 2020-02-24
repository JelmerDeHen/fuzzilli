function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {valueOf:v2,length:13.37,d:127,e:127};
// v3 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "valueOf", "length"])
let v4 = v3;
v4 = 127;
const v7 = Object.isSealed(v4);
// v7 = .boolean
}
%NeverOptimizeFunction(main);
main();
