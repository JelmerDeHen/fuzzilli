function main() {
let v2 = 0;
let v5 = 1337;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
