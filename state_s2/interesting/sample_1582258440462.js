function main() {
const v5 = {c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v7 = typeof Array;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
const v10 = Array(0);
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
v10[8] = v5;
}
%NeverOptimizeFunction(main);
main();
