function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        let v14 = 0;
        const v18 = gc();
        // v18 = .undefined
        const v19 = Function("string");
        // v19 = .unknown
        const v20 = v14 + 1;
        // v20 = .primitive
        v14 = v20;
        let v22 = 0;
        for (const v23 in "boolean") {
            let v26 = 0;
            do {
                try {
                    let v29 = 0;
                    const v30 = v29 + 1;
                    // v30 = .primitive
                    v29 = v30;
                    const v34 = Object(1337,gc);
                    // v34 = .object()
                } catch(v35) {
                    let v38 = 0;
                    while (v38 < 10) {
                    }
                }
                const v39 = v26 + 1;
                // v39 = .primitive
                v26 = v39;
            } while (v26 < 8);
        }
        do {
            const v40 = v22 + 1;
            // v40 = .primitive
            v22 = v40;
        } while (v22 < 3);
        for (const v42 in "object") {
        }
        return v4;
    }
    const v44 = [1337];
    // v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v45 = v44;
    const v46 = v4(v45);
    // v46 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
