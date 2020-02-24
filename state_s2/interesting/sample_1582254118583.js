function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = v1 & Array;
// v2 = .integer
const v3 = typeof v2;
// v3 = .string
const v5 = v3 === "symbol";
// v5 = .boolean
const v9 = typeof Array;
// v9 = .string
const v11 = v9 === "undefined";
// v11 = .boolean
let v12 = "object";
const v13 = Object > v12;
// v13 = .boolean
}
%NeverOptimizeFunction(main);
main();
