function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = [1337,v2,Int8Array];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            while (v14 < 3) {
                const v15 = v14 + 1;
                // v15 = .primitive
                v14 = v15;
            }
            let v16 = v11;
            const v17 = v16 % v14;
            // v17 = .number
            const v18 = v17 || v4;
            // v18 = .boolean
            const v19 = v11 + 1;
            // v19 = .primitive
            v11 = v19;
        } while (v11 < 8);
    }
}
const v20 = v4(v3);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
