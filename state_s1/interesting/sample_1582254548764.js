function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = Object();
// v4 = .object()
const v5 = {call:Object};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v7 = new Proxy(Array,v5);
// v7 = .unknown
const v8 = Object.getOwnPropertyDescriptor(v1,v7);
// v8 = .object(withProperties: ["enumerable", "value", "writable", "configurable"])
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
