function main() {
let v4 = 0;
let v7 = 0;
const v20 = 1337 == 13.37;
// v20 = .boolean
const v22 = Object();
// v22 = .object()
let v25 = 0;
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v29 = Object.defineProperties(v27,RegExp);
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
