function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
let v11 = 0;
let v14 = 0;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v28 = [13.37,13.37,13.37,13.37];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v29 = {__proto__:"hasInstance",d:v28};
// v29 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v31 = {call:v29};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v33 = new Proxy(RegExp,v31);
// v33 = .unknown
for (const v34 in v33) {
}
const v38 = v14 + 1;
// v38 = .primitive
v14 = v38;
const v39 = v11 + 1;
// v39 = .primitive
v11 = v39;
let v44 = -256;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
}
%NeverOptimizeFunction(main);
main();
