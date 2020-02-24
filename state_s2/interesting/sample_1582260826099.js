function main() {
function v0(v1,v2,v3,v4,v5) {
    'use strict'
    function v6(v7,v8) {
        for (let v12 = 0; v12 < 100; v12++) {
            const v14 = [13.37,13.37,13.37];
            // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            function v17(v18,v19) {
                const v21 = 1337 >= 0;
                // v21 = .boolean
                const v23 = Symbol.toStringTag;
                // v23 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                v14[v23] = v21;
            }
            let v25 = v6;
            const v26 = v17(v25);
            // v26 = .unknown
            const v27 = v17(1024,4.0);
            // v27 = .unknown
        }
    }
    const v29 = [1337];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v30 = v29;
    const v31 = v6(v30);
    // v31 = .unknown
}
const v32 = v0();
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
