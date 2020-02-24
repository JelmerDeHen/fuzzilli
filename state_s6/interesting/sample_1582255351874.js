function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        const v8 = typeof "iterator";
        // v8 = .string
        const v10 = v8 === "symbol";
        // v10 = .boolean
        let v17 = 0;
        for (const v18 in "boolean") {
            let v21 = 0;
            do {
                let v24 = 0;
                do {
                    const v25 = v24 + 1;
                    // v25 = .primitive
                    v24 = v25;
                } while (v24 < 7);
                let v28 = 0;
                const v29 = v21 + 1;
                // v29 = .primitive
                v21 = v29;
            } while (v21 < 8);
        }
        const v30 = v17 + 1;
        // v30 = .primitive
        v17 = v30;
    }
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v34 = v33;
    const v35 = v4(v34);
    // v35 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
