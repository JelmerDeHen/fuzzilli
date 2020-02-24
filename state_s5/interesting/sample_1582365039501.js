function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {e:13.37,a:1337,valueOf:v5,d:v3,b:v5};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "d", "a", "__proto__"])
const v7 = {valueOf:NaN,b:NaN,d:1,toString:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "d", "valueOf"])
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = new Set(v10);
// v11 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["has", "clear", "values", "delete", "add", "keys", "entries", "forEach"])
const v12 = v11.entries();
// v12 = .object()
let v15 = 0;
const v20 = Symbol.iterator;
// v20 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v12[v20] = v7;
}
%NeverOptimizeFunction(main);
main();
