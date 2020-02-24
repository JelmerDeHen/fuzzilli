function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = v2;
let v5 = undefined;
let v12 = 0;
const v17 = {get:undefined};
// v17 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
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
