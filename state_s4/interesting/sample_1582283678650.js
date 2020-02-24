function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
