function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {toString:"species",valueOf:v2,__proto__:"species"};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf"])
let v4 = v3;
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "e", "d"])
let v9 = v8;
const v13 = [];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v9 = 13.37;
const v14 = {valueOf:v13,length:13.37,d:127,e:127};
// v14 = .object(ofGroup: Object, withProperties: ["length", "d", "e", "__proto__", "valueOf"])
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v19 = Object.isSealed(v9);
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
