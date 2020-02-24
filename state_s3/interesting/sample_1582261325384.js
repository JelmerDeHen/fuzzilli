function main() {
let v4 = 0;
let v7 = 0;
const v20 = 1337 == 13.37;
// v20 = .boolean
const v22 = Object();
// v22 = .object()
let v25 = 0;
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v29 = Object.defineProperties(v27,RegExp);
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
