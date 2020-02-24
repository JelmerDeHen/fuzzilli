function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v5 = undefined;
let v10 = 0;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v15 = v10 + 1;
// v15 = .primitive
v10 = v15;
const v24 = [];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v25 = {valueOf:v24,length:13.37,d:127,e:127};
// v25 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "length", "d"])
const v26 = {c:v24,valueOf:v25,d:Array,a:1337};
// v26 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "c"], withMethods: ["d"])
length = v26;
let v29 = 0;
length = 0;
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
const v34 = v29 + 1;
// v34 = .primitive
v29 = v34;
let v37 = 0;
}
%NeverOptimizeFunction(main);
main();
