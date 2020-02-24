function main() {
const v5 = {c:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v11 = [v9,471091797,DataView];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = {toString:1337};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
v5.c = v12;
const v15 = Symbol.toPrimitive;
// v15 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v11[v15] = 1337;
const v16 = isFinite(v5);
// v16 = .boolean
}
%NeverOptimizeFunction(main);
main();
