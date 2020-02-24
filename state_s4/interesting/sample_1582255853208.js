function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        let v14 = 0;
        for (const v15 in "boolean") {
            let v18 = 0;
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v6[v22] = 7;
                v21 = v22;
            } while (v21 < 7);
            let v25 = 0;
            const v26 = v18 + 1;
            // v26 = .primitive
            v18 = v26;
        }
        const v27 = v14 + 1;
        // v27 = .primitive
        v14 = v27;
    }
    const v30 = [1337];
    // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v31 = v30;
    const v32 = v5(v31);
    // v32 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
