function main() {
const v2 = {a:eval,length:1337};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
