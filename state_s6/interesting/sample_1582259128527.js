function main() {
const v2 = {valueOf:WeakSet,e:WeakSet,d:WeakSet,__proto__:1337};
// v2 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "e", "__proto__"])
let v7 = 0;
const v8 = v7[v2];
// v8 = .unknown
const v9 = [1337,"DcfX6ukbNP"];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = [v9,v9,v9];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = new WeakSet(v10);
// v11 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["has", "add", "delete"])
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
