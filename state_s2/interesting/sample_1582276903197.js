function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v7.valueOf = Boolean;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
let v12 = v7;
const v13 = Math.pow(v12,v7);
// v13 = .number
}
%NeverOptimizeFunction(main);
main();
