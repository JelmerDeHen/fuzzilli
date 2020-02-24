function main() {
let v1 = undefined;
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v4 = v3;
let v10 = 0;
let v12 = 0;
const v13 = {};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
v13.a = "boolean";
const v14 = v10 + 1;
// v14 = .primitive
v10 = v14;
let v15 = 0;
const v16 = {};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v18 = Symbol.toPrimitive;
// v18 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v16[v18] = v15;
}
%NeverOptimizeFunction(main);
main();
