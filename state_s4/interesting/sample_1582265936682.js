function main() {
for (const v2 in "boolean") {
    let v5 = 0;
    do {
        for (const v8 in "boolean") {
            function v9(v10,v11) {
                let v13 = 0;
                const v14 = v13 / 2;
                // v14 = .number
                const v15 = v14 + 1;
                // v15 = .primitive
            }
            const v17 = [7];
            // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v18 = v17;
            const v19 = v9(v18);
            // v19 = .unknown
        }
        const v20 = v5 + 1;
        // v20 = .primitive
        v5 = v20;
    } while (v5 < 8);
}
}
%NeverOptimizeFunction(main);
main();
