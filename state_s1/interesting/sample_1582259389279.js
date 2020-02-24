function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
let v8 = 0;
v3 = v4;
const v10 = [13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
