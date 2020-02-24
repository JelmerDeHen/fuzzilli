function main() {
const v2 = {has:gc,call:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has"])
const v4 = new Proxy(gc,v2);
// v4 = .unknown
v2.__proto__ = Proxy;
v4.constructor = 0;
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = {d:gc,valueOf:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
Object[v9] = v8;
}
%NeverOptimizeFunction(main);
main();
