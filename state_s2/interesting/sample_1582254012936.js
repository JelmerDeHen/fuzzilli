function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {valueOf:v5,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["length", "d", "valueOf", "__proto__", "e"])
const v8 = {c:v5,valueOf:v7,d:Array,a:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "a"], withMethods: ["d"])
const v38 = Array in v8;
// v38 = .boolean
}
%NeverOptimizeFunction(main);
main();
