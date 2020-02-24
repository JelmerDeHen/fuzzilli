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
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v44 = 0;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
}
%NeverOptimizeFunction(main);
main();
