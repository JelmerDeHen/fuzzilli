function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["length", "b", "e", "__proto__", "a", "valueOf"])
v7[1337] = 4294967297;
v7.__proto__ = v8;
function v9(v10,v11,v12,v13,...v14) {
}
const v17 = v6[-2147483648];
// v17 = .unknown
const v18 = v9 instanceof gc;
// v18 = .boolean
let v24 = 0;
v7.valueOf = gc;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v30 = gc();
// v30 = .undefined
}
%NeverOptimizeFunction(main);
main();
