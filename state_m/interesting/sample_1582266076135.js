function main() {
let v2 = 0;
let v5 = 1337;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v9 = v8;
v8[7] = 0;
const v11 = v9.indexOf(v5,-9007199254740991);
// v11 = .integer
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
}
%NeverOptimizeFunction(main);
main();
