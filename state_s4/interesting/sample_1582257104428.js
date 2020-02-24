function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "undefined") {
    let v9 = 0;
    do {
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
            const v15 = [13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            function v17(v18,v19,v20) {
                'use strict'
                const v22 = Symbol.species;
                // v22 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                v15[v22] = "object";
            }
            const v23 = v17();
            // v23 = .unknown
        } while (v12 < 7);
        const v24 = v9 + 1;
        // v24 = .primitive
        v9 = v24;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
