function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = Object.isFrozen("object");
// v6 = .boolean
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = {valueOf:v13,length:13.37,d:127,e:127};
// v14 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "e", "length"])
const v15 = {c:v13,valueOf:v14,d:Array,a:1337};
// v15 = .object(ofGroup: Object, withProperties: ["c", "a", "valueOf", "__proto__"], withMethods: ["d"])
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
