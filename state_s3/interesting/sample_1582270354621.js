function main() {
let v1 = undefined;
let v5 = 0;
const v7 = v5 + 1;
// v7 = .primitive
v5 = v7;
const v13 = [13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v13[1] = 3269227210;
const v14 = v13.shift();
// v14 = .unknown
const v16 = Object();
// v16 = .object()
}
%NeverOptimizeFunction(main);
main();
