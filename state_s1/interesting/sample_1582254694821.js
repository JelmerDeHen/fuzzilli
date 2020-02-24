function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = 0;
const v4 = v3[3];
// v4 = .unknown
let v7 = 0;
const v8 = v1 + 1;
// v8 = .primitive
v7 = v8;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v15 = new Boolean(4);
// v15 = .boolean
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
}
%NeverOptimizeFunction(main);
main();
