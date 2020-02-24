function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {b:v4,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "e", "c", "b", "__proto__"])
const v8 = "function".__proto__;
// v8 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = [v14,v14,v14];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = new Map(v15);
// v16 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["has", "keys", "get", "forEach", "entries", "set", "values", "clear", "delete"])
const v17 = v5.e;
// v17 = .unknown
let v18 = 1337;
const v19 = {length:1805143900,a:"function",constructor:"function",d:"function",e:v18};
// v19 = .object(ofGroup: Object, withProperties: ["length", "a", "d", "e", "constructor", "__proto__"])
v16[v19] = v8;
}
%NeverOptimizeFunction(main);
main();
