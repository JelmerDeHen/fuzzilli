function main() {
const v2 = {length:"EXkcpBKht7",d:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {call:Object};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v8 = v2 == v2;
// v8 = .boolean
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v14 = new Proxy(Array,v7);
// v14 = .unknown
const v15 = Object.preventExtensions(v4,v14);
// v15 = .object()
}
%NeverOptimizeFunction(main);
main();
