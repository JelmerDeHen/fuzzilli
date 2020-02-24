function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v5 = "dVmqACI+Vs";
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v10 = v9;
v9[257] = 0;
const v12 = v10.indexOf(v5,-9007199254740991);
// v12 = .integer
}
%NeverOptimizeFunction(main);
main();
