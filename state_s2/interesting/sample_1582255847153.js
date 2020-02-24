function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        function v13(v14,v15) {
            const v16 = v14 in v13;
            // v16 = .boolean
        }
        const v18 = [1337];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v19 = v18;
        const v20 = v13(v19);
        // v20 = .unknown
        let v21 = 0;
        for (const v22 in "boolean") {
            let v25 = 0;
            do {
                let v28 = 0;
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
                let v32 = 0;
                const v33 = v25 + 1;
                // v33 = .primitive
                v25 = v33;
            } while (v25 < 8);
        }
        const v34 = v21 + 1;
        // v34 = .primitive
        v21 = v34;
        for (const v36 in "object") {
        }
    }
    const v38 = [1337];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v39 = v38;
    const v40 = v4(v39);
    // v40 = .unknown
    v2 = v3;
    let v43 = 0;
    const v44 = v43 + 1;
    // v44 = .primitive
    v43 = v44;
    const v47 = gc();
    // v47 = .undefined
    let v52 = 0;
    for (let v56 = 0; v56 < 0; v56++) {
        const v57 = v56 instanceof 0;
        // v57 = .boolean
    }
    const v58 = v52 + 1;
    // v58 = .primitive
    v52 = v58;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
