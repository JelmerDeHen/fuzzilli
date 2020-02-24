function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {b:v4,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["c", "b", "constructor", "e", "__proto__"])
const v8 = "function".__proto__;
// v8 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [v14,v14,v14];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = new Map(v15);
// v16 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["keys", "delete", "entries", "clear", "has", "get", "forEach", "values", "set"])
const v17 = v5.e;
// v17 = .unknown
let v18 = 1337;
const v19 = {length:1805143900,a:"function",constructor:"function",d:"function",e:v18};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "a", "length", "e"])
v16[v19] = v8;
}
%NeverOptimizeFunction(main);
main();
