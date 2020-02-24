function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {constructor:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
for (const v5 in "boolean") {
    function v6(v7,v8) {
        'use strict'
        const v9 = arguments[v7];
        // v9 = .unknown
        return v9;
    }
    for (let v16 = 0; v16 < 100; v16++) {
        const v17 = v6(1,v3);
        // v17 = .unknown
    }
    const v20 = Array(127);
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
}
}
%NeverOptimizeFunction(main);
main();
