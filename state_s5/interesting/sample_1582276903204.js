function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
