function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
