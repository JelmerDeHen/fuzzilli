function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v3 = v2;
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
let v8 = 0;
v3[v6] = v8;
const v10 = Object.entries(v2);
// v10 = .object()
const v17 = [13.37,13.37,13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = [v17,471091797,DataView];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v20 = {c:1337};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v21 = {constructor:v17,toString:v20,__proto__:471091797,length:v19};
// v21 = .object(ofGroup: Object, withProperties: ["toString", "length", "__proto__", "constructor"])
const v22 = typeof v21;
// v22 = .string
}
%NeverOptimizeFunction(main);
main();
