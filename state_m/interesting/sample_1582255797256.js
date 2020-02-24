function main() {
for (let v3 = 0; v3 < 3; v3++) {
    function v4(v5,v6) {
        const v14 = 13.37 + 1;
        // v14 = .primitive
        let v15 = 0;
        for (const v16 in "boolean") {
            let v19 = 0;
            do {
                let v20 = v14;
                const v21 = v20 + 1;
                // v21 = .primitive
                let v24 = 0;
                const v25 = v24 + 1;
                // v25 = .primitive
                v24 = v25;
                let v28 = 0;
                const v29 = v19 + 1;
                // v29 = .primitive
                v19 = v29;
            } while (v19 < 8);
        }
        const v30 = v15 + 1;
        // v30 = .primitive
        v15 = v30;
        for (const v32 in "object") {
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v35 = v34;
    const v36 = v4(v35);
    // v36 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
