function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = Object.isFrozen("object");
// v6 = .boolean
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = [];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {valueOf:v13,length:13.37,d:127,e:127};
// v14 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "length", "__proto__", "d"])
const v15 = {c:v13,valueOf:v14,d:Array,a:1337};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "a"], withMethods: ["d"])
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
