function main() {
let v4 = undefined;
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = Symbol.iterator;
// v8 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v6[v8] = 1337;
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v12 = v11;
let v14 = undefined;
let v18 = 0;
const v19 = {};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
v19.a = "boolean";
let v22 = 0;
const v23 = v18 + 1;
// v23 = .primitive
v18 = v23;
}
%NeverOptimizeFunction(main);
main();
