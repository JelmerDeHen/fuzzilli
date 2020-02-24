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
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
