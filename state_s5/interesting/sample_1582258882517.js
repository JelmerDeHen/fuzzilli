function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [v1];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = v4;
let v7 = undefined;
let v14 = 0;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
let v21 = 0;
const v25 = DataView + 1;
// v25 = .primitive
v14 = v25;
v7 = "boolean";
let v31 = 0;
const v32 = Object.entries(v4);
// v32 = .object()
const v33 = v31 + 1;
// v33 = .primitive
v31 = v33;
}
%NeverOptimizeFunction(main);
main();
