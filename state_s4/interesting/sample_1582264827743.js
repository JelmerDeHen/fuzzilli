function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v4 = v3;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
let v18 = 0;
v8 = v9;
const v21 = [13.37,13.37,13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v22 = {__proto__:"hasInstance",d:v21};
// v22 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
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
