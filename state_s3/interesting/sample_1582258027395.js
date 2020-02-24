function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v14 = [];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = {valueOf:v14,length:13.37,d:127,e:127};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "length", "d", "__proto__"])
const v16 = {c:v14,valueOf:v15,d:Array,a:1337};
// v16 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "a"], withMethods: ["d"])
const v19 = v7 != v16;
// v19 = .boolean
const v20 = {__proto__:Array,constructor:Array,valueOf:gc,c:1337,a:v8};
// v20 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a"], withMethods: ["constructor", "__proto__", "valueOf"])
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
Array[-4294967297] = -4294967297;
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
