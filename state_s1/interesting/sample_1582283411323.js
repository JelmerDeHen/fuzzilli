function main() {
let v4 = 0;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v13 = 0;
const v14 = [v9];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = {valueOf:Int32Array,c:v9,__proto__:v14,b:v7};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "c"])
const v17 = new Map(v15);
// v17 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["clear", "entries", "forEach", "delete", "has", "keys", "get", "set", "values"])
const v18 = v4 + 1;
// v18 = .primitive
v4 = v18;
const v19 = v17.keys();
// v19 = .object()
const v20 = gc();
// v20 = .undefined
const v21 = gc();
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();
