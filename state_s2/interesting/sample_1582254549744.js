function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = Object();
// v4 = .object()
const v5 = {call:Object};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v7 = new Proxy(Array,v5);
// v7 = .unknown
const v8 = Object.getOwnPropertyDescriptor(v1,v7);
// v8 = .object(withProperties: ["configurable", "value", "writable", "enumerable"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
}
%NeverOptimizeFunction(main);
main();
