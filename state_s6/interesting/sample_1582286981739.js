function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v10 = 0;
const v14 = [13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        delete "NEGATIVE_INFINITY"[v18];
    } catch(v21) {
    }
}
const v22 = v15(v10,3,8,v14);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
