function main() {
for (const v1 in "undefined") {
    let v4 = 0;
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    function v9(v10,v11,v12) {
        'use strict'
        const v14 = [1337,1337,1337,1337,1337];
        // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v16 = [1337,1337,1337,1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        for (const v17 in v14) {
            v16.length = v17;
        }
    }
    const v18 = v9();
    // v18 = .unknown
    const v19 = v4 + 1;
    // v19 = .primitive
    v4 = v19;
}
}
%NeverOptimizeFunction(main);
main();
