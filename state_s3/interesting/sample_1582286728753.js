function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
