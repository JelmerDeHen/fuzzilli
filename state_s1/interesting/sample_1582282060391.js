function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
