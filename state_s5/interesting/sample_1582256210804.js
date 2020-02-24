function main() {
const v2 = {a:eval,length:1337};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v22 = Object.assign(v2,v5);
// v22 = .undefined
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
let v32 = 4294967297;
}
%NeverOptimizeFunction(main);
main();
