function main() {
let v3 = 0;
let v6 = 0;
let v17 = 0;
while (v17 < 8) {
    function v18(v19,v20) {
        let v24 = 2147483648;
        for (const v25 in "boolean") {
            let v28 = 0;
            do {
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
            } while (v28 < 8);
        }
        do {
            const v30 = v24 + 1;
            // v30 = .primitive
            v24 = v30;
        } while (v24 < 3);
        return v24;
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v33 = v32;
    const v34 = v18(v33);
    // v34 = .unknown
    const v35 = v17 + 1;
    // v35 = .primitive
    v17 = v35;
}
}
%NeverOptimizeFunction(main);
main();
