function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "length", "e", "valueOf"])
const v6 = {c:v4,valueOf:v5,d:Array,a:1337};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "a"], withMethods: ["d"])
v6[2147483649] = Array;
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
}
%NeverOptimizeFunction(main);
main();
