function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = {toString:v4,b:"PI",valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "toString"])
const v8 = {b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v14 = "object".constructor;
// v14 = .function()
const v15 = v14(v14,v8,1337,v14,v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
