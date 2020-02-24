function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
