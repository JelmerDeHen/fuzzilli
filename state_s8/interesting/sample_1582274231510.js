function main() {
let v3 = String;
for (let v7 = 0; v7 < 3; v7++) {
    function v8(v9,v10) {
        let v15 = 0;
        while (v15 < 1) {
            const v16 = DataView[v7];
            // v16 = .unknown
            const v17 = v15 + 1;
            // v17 = .primitive
            v15 = v17;
        }
        let v20 = 0;
        for (const v21 in "boolean") {
            let v24 = 0;
            do {
                try {
                    const v25 = v3 == 8;
                    // v25 = .boolean
                    let v28 = 0;
                } catch(v29) {
                }
                const v30 = v24 + 1;
                // v30 = .primitive
                v24 = v30;
            } while (v24 < 8);
        }
    }
    const v35 = [1337];
    // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v36 = v35;
    const v37 = v8(v36);
    // v37 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
