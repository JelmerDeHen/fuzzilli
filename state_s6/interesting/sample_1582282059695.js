function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
