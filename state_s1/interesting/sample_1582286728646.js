function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
