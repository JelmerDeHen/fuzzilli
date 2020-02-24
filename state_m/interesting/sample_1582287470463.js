function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,v3,Int8Array];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
            const v20 = v12 + 1;
            // v20 = .primitive
            v12 = v20;
        } while (v12 < 8);
    }
}
const v21 = v5(v4);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
