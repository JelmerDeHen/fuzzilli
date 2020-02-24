function main() {
const v2 = "function".__proto__;
// v2 = .object()
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [v5,v5,v5];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = new WeakSet(v6);
// v7 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["delete", "has", "add"])
v5.length = 1337;
let v8 = 1337;
const v9 = {length:1805143900,a:"function",constructor:"function",d:"function",e:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "a", "d", "length"])
v7[v9] = v2;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
}
%NeverOptimizeFunction(main);
main();
