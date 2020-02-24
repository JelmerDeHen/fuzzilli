function main() {
let v4 = 0;
let v7 = 0;
const v20 = 1337 == 13.37;
// v20 = .boolean
const v22 = Object();
// v22 = .object()
let v25 = 0;
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v29 = Object.defineProperties(v27,RegExp);
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
