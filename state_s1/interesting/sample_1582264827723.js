function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v4 = v3;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
let v18 = 0;
v8 = v9;
const v21 = [13.37,13.37,13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
