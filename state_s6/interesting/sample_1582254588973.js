function main() {
const v2 = {has:gc,call:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call"])
const v4 = new Proxy(gc,v2);
// v4 = .unknown
v2.__proto__ = Proxy;
v4.constructor = 0;
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v9 = {d:gc,valueOf:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
Object[v9] = v8;
}
%NeverOptimizeFunction(main);
main();
