function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v3 = v2;
let v5 = undefined;
let v12 = 0;
const v17 = {get:undefined};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v19 = Object.defineProperty(Object,268435456,v17);
// v19 = .undefined
const v20 = Object.preventExtensions(Object);
// v20 = .object()
let v24 = 0;
let v25 = 0;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v33 = v25 + 1;
// v33 = .primitive
v25 = v33;
const v34 = v12 + 1;
// v34 = .primitive
v12 = v34;
}
%NeverOptimizeFunction(main);
main();
