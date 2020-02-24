function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v4 = v3;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
let v18 = 0;
v8 = v9;
const v21 = [13.37,13.37,13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v22 = {__proto__:"hasInstance",d:v21};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v24 = {call:v22};
// v24 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v26 = new Proxy(Array,v24);
// v26 = .unknown
let v30 = 0;
const v32 = new v26();
// v32 = .object()
}
%NeverOptimizeFunction(main);
main();
