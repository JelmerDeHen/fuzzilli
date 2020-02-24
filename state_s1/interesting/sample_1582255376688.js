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
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v44 = 0;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
}
%NeverOptimizeFunction(main);
main();
