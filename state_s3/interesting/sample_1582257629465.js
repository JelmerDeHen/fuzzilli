function main() {
const v2 = [1337,Promise];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = v4;
let v7 = undefined;
const v8 = v2.fill();
// v8 = .undefined
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
let v19 = 0;
let v22 = 0;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
const v30 = v22 + 1;
// v30 = .primitive
v22 = v30;
const v31 = v19 + 1;
// v31 = .primitive
v19 = v31;
}
%NeverOptimizeFunction(main);
main();
