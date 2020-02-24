function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = Object.freeze(v1);
// v5 = .undefined
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
const v10 = Object.getOwnPropertyDescriptors(v1);
// v10 = .object()
const v11 = v9 === 1;
// v11 = .boolean
}
%NeverOptimizeFunction(main);
main();
