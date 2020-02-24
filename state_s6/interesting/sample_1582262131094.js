function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {b:v4,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "e", "c", "constructor"])
const v8 = "function".__proto__;
// v8 = .object()
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = [v14,v14,v14];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v16 = new Map(v15);
// v16 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["has", "delete", "keys", "set", "entries", "forEach", "values", "clear", "get"])
const v17 = v5.e;
// v17 = .unknown
let v18 = 1337;
const v19 = {length:1805143900,a:"function",constructor:"function",d:"function",e:v18};
// v19 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "e", "length", "a"])
v16[v19] = v8;
}
%NeverOptimizeFunction(main);
main();
