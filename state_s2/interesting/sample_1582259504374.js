function main() {
function v1(v2,v3) {
    const v4 = v2 in v1;
    // v4 = .boolean
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v12 = [1337,1337,1337];
            // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v15 = 0;
            const v17 = [13.37,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            function v18(v19,v20,v21) {
                'use strict'
                delete v17[-2147483648];
            }
            const v22 = v18();
            // v22 = .unknown
            const v23 = v12 + 1;
            // v23 = .primitive
            v15 = v23;
            const v24 = v9 + 1;
            // v24 = .primitive
            v9 = v24;
        } while (v9 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v28 = v27;
const v29 = v1(v28);
// v29 = .unknown
const v30 = v1(1024,4.0);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
