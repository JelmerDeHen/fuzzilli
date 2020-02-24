function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        for (let v11 = 0; v11 < 10; v11 = v11 + undefined) {
        }
        let v14 = 0;
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                let v21 = 0;
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
                let v25 = 0;
                const v26 = v18 + 1;
                // v26 = .primitive
                v18 = v26;
            } while (v18 < 8);
        }
        const v27 = v14 + 1;
        // v27 = .primitive
        v14 = v27;
    }
    const v30 = [1337];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v31 = v30;
    const v32 = v5(v31);
    // v32 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
