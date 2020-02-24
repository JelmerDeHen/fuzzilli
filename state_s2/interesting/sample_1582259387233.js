function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
let v8 = 0;
v3 = v4;
const v10 = [13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
