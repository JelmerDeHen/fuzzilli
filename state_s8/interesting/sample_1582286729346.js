function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v6;
let v9 = undefined;
const v13 = Symbol(undefined);
// v13 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v14 = v13.toString();
// v14 = .unknown
v3 = v4;
}
%NeverOptimizeFunction(main);
main();
