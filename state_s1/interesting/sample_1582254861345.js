function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        let v14 = 0;
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                try {
                    let v21 = 0;
                    do {
                        const v22 = v21 + 1;
                        // v22 = .primitive
                        v21 = gc;
                    } while (v21 < 7);
                } catch(v23) {
                    let v26 = 0;
                    while (v26 < 10) {
                    }
                }
                const v27 = v18 + 1;
                // v27 = .primitive
                v18 = v27;
            } while (v18 < 8);
        }
        const v28 = v14 + 1;
        // v28 = .primitive
        v14 = v28;
        for (const v30 in "object") {
        }
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v33 = v32;
    const v34 = v5(v33);
    // v34 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
