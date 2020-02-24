function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = [-302538.50499003823];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
