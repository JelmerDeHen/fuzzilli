function main() {
function v0(v1,v2,v3,v4,v5) {
    'use strict'
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            function v12(v13,v14) {
                for (const v16 in "boolean") {
                    const v19 = 8 + 1;
                    // v19 = .primitive
                    v13[v19] = 7;
                }
            }
            const v21 = [1337];
            // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v22 = v21;
            const v23 = v12(v22);
            // v23 = .unknown
            v10 = v11;
        } while (v10 < 7);
        for (let v27 = 0; v27 < 100; v27++) {
        }
    }
}
const v28 = v0();
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
