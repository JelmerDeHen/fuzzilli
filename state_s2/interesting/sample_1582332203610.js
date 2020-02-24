function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = [-302538.50499003823];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v8 = v7;
const v9 = Math.pow(v8,2);
// v9 = .number
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v15 = Math.sin(v9);
// v15 = .number
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
}
%NeverOptimizeFunction(main);
main();
