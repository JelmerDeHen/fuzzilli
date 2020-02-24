function main() {
let v5 = "boolean";
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
function v14(v15,v16,v17,v18) {
    'use strict'
    "boolean".__proto__ = v14;
}
const v19 = v14(v14,-4294967297);
// v19 = .unknown
const v25 = [13.37,13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v44 = 0;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
}
%NeverOptimizeFunction(main);
main();
