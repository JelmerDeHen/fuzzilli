function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
