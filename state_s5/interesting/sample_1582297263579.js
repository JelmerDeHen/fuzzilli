function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,v3,Int8Array];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            while (v15 < 3) {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
            }
            let v17 = -4096;
            const v18 = v17 % v15;
            // v18 = .number
            const v19 = v18 || v5;
            // v19 = .boolean
            const v20 = v4.indexOf(v19,0);
            // v20 = .integer
            const v21 = v12 + 1;
            // v21 = .primitive
            v12 = v21;
        } while (v12 < 8);
    }
}
const v22 = v5(v4);
// v22 = .unknown
const v26 = v5(Int8Array,0);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
