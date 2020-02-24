function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v1 = [v0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
let v9 = 0;
const v11 = v9 + 1;
// v11 = .primitive
v9 = v11;
const v12 = 3 + 1;
// v12 = .primitive
const v14 = Math.log(v12);
// v14 = .number
}
%NeverOptimizeFunction(main);
main();
