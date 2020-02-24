function main() {
for (let v3 = 0; v3 < 3; v3++) {
    let v6 = 0;
    do {
        function v8(v9,v10) {
            let v13 = 0;
            for (const v14 in "asyncIterator") {
                let v16 = v13;
                if (v9) {
                    const v17 = "iterator".MIN_VALUE;
                    // v17 = .unknown
                    v16 = v17;
                } else {
                }
                const v18 = v16 <= 2148685566;
                // v18 = .boolean
            }
        }
        const v20 = [1337];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v21 = v20;
        const v22 = v8(v21);
        // v22 = .unknown
        const v23 = v6 + 1;
        // v23 = .primitive
        v6 = v23;
    } while (v6 < 3);
}
}
%NeverOptimizeFunction(main);
main();
