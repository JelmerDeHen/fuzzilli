function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v1 = [v0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
let v4 = undefined;
let v9 = 0;
const v11 = v9 + 1;
// v11 = .primitive
v9 = v11;
const v12 = 3 + 1;
// v12 = .primitive
const v14 = Math.log(v12);
// v14 = .number
}
%NeverOptimizeFunction(main);
main();
