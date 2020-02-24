function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
const v3 = v2 + 1;
// v3 = .primitive
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = v4 != v3;
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
