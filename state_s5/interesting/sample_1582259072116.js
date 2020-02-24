function main() {
const v2 = {valueOf:WeakSet,e:WeakSet,d:WeakSet,__proto__:1337};
// v2 = .object(ofGroup: Object, withProperties: ["e", "d", "valueOf", "__proto__"])
let v7 = 0;
const v8 = v7[v2];
// v8 = .unknown
const v9 = [1337,"DcfX6ukbNP"];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = [v9,v9,v9];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = new WeakSet(v10);
// v11 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["delete", "has", "add"])
v9.toString = v8;
delete v9.toString;
const v14 = 1337 == 13.37;
// v14 = .boolean
let v17 = 0;
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
}
%NeverOptimizeFunction(main);
main();
