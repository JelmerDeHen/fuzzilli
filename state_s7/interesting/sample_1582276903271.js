function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
