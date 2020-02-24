function main() {
const v2 = {has:gc,call:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call"])
const v4 = new Proxy(gc,v2);
// v4 = .unknown
v2.__proto__ = Proxy;
v4.constructor = 0;
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = {d:gc,valueOf:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
Object[v9] = v8;
}
%NeverOptimizeFunction(main);
main();
