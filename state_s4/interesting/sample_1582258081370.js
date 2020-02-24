function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = Object.isFrozen("object");
// v6 = .boolean
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = [];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = {valueOf:v13,length:13.37,d:127,e:127};
// v14 = .object(ofGroup: Object, withProperties: ["e", "d", "valueOf", "length", "__proto__"])
const v15 = {c:v13,valueOf:v14,d:Array,a:1337};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "a"], withMethods: ["d"])
const v17 = v8 != v15;
// v17 = .boolean
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
let v26 = 0;
}
%NeverOptimizeFunction(main);
main();
