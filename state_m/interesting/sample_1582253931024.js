function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "e", "length", "__proto__"])
const v6 = {c:v4,valueOf:v5,d:Array,a:1337};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "c", "__proto__"], withMethods: ["d"])
const v7 = -Infinity;
// v7 = .float
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = {valueOf:v11,length:13.37,d:127,e:127};
// v12 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d", "length", "valueOf"])
const v13 = {c:v11,valueOf:v12,d:Array,a:v7};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "valueOf"], withMethods: ["d"])
}
%NeverOptimizeFunction(main);
main();
