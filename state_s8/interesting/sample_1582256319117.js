function main() {
for (const v1 in "object") {
    function v3(v4,v5) {
        const v7 = 0 % "object";
        // v7 = .number
        let v10 = 0;
        for (const v11 in "boolean") {
            let v14 = 0;
            do {
                let v17 = 0;
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
                let v21 = 0;
                const v22 = v14 + 1;
                // v22 = .primitive
                v14 = v22;
            } while (v14 < 8);
        }
        const v23 = v10 + 1;
        // v23 = .primitive
        v10 = v23;
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v26 = v25;
    const v27 = v3(v26);
    // v27 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
