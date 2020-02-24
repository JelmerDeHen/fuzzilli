function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
let v8 = 0;
v3 = v4;
const v10 = [13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = v10[1024];
// v11 = .unknown
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
DataView.valueOf = v11;
delete DataView.valueOf;
}
%NeverOptimizeFunction(main);
main();
