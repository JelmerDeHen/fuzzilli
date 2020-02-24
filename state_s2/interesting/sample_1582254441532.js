function main() {
const v4 = Object();
// v4 = .object()
const v7 = Array(127);
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
with (v7) {
    const v11 = [1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v12 = {d:gc,valueOf:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
    function v14(v15,v16) {
        'use strict'
        return v12;
    }
}
const v17 = gc();
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();
