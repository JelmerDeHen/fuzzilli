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
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
