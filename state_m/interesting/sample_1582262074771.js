function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {__proto__:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = v6 - v7;
// v8 = .number
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v14 = v6.indexOf(v8,Promise);
// v14 = .integer
let v17 = 0;
}
%NeverOptimizeFunction(main);
main();
