function main() {
for (let v3 = 0; v3 < 3; v3++) {
    function v4(v5,v6) {
        let v11 = 0;
        do {
            const v12 = v6 - 1;
            // v12 = .primitive
            const v13 = v11 + 1;
            // v13 = .primitive
            v11 = v13;
        } while (v11 < 0);
        const v14 = 13.37 + 1;
        // v14 = .primitive
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                let v19 = v14;
                const v20 = v19 + 1;
                // v20 = .primitive
                let v22 = 0;
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
                const v24 = v18 + 1;
                // v24 = .primitive
                v18 = v24;
            } while (v18 < 8);
        }
        for (const v26 in "object") {
        }
    }
    const v28 = [1337];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v29 = v28;
    const v30 = v4(v29);
    // v30 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
