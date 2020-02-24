function main() {
let v2 = 0;
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [13.37,v5];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = Object.seal(v6);
// v12 = .object()
v12.length = 1098526145;
let v20 = 0;
let v23 = 0;
const v27 = v2 + 1;
// v27 = .primitive
v2 = v27;
}
%NeverOptimizeFunction(main);
main();
