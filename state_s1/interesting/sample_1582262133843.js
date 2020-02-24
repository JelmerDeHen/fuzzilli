function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {b:v4,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["c", "e", "__proto__", "b", "constructor"])
const v8 = "function".__proto__;
// v8 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = [v14,v14,v14];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v16 = new Map(v15);
// v16 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["clear", "entries", "forEach", "delete", "has", "keys", "get", "set", "values"])
const v17 = v5.e;
// v17 = .unknown
let v18 = 1337;
const v19 = {length:1805143900,a:"function",constructor:"function",d:"function",e:v18};
// v19 = .object(ofGroup: Object, withProperties: ["length", "a", "d", "e", "__proto__", "constructor"])
v16[v19] = v8;
}
%NeverOptimizeFunction(main);
main();
