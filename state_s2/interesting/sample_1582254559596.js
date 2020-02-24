function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "d", "__proto__", "length"])
const v6 = {c:v4,valueOf:v5,d:Array,a:1337};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "c"], withMethods: ["d"])
let v15 = 0;
const v17 = [];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = {valueOf:v17,length:13.37,d:127,e:127};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "length", "d"])
const v19 = {c:v17,valueOf:v18,d:Array,a:1337};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "c"], withMethods: ["d"])
const v20 = Array(127);
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v21 = {__proto__:13.37,valueOf:v6,...Array,...v19,...v20};
// v21 = .object(ofGroup: Object, withProperties: ["prototype", "a", "length", "__proto__", "c", "valueOf", "constructor"], withMethods: ["find", "shift", "indexOf", "d", "from", "reverse", "flatMap", "sort", "reduce", "isArray", "lastIndexOf", "push", "entries", "flat", "slice", "join", "fill", "values", "splice", "reduceRight", "toString", "filter", "keys", "map", "forEach", "unshift", "every", "includes", "some", "copyWithin", "of", "concat", "toLocaleString", "pop", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
