function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "length", "e"])
const v6 = {c:v4,valueOf:v5,d:Array,a:1337};
// v6 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "valueOf"], withMethods: ["d"])
v6.valueOf = Array;
let v12 = 1337;
}
%NeverOptimizeFunction(main);
main();
