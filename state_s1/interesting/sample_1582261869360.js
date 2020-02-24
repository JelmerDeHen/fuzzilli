function main() {
for (let v3 = 0; v3 < 3; v3++) {
    let v6 = 0;
    do {
        function v8(v9,v10) {
            let v13 = 0;
            for (const v14 in "boolean") {
                let v16 = v13;
                if (v9) {
                    const v17 = "iterator".MIN_VALUE;
                    // v17 = .unknown
                    v16 = v17;
                } else {
                }
                const v18 = v16 >= 0;
                // v18 = .boolean
                let v19 = 0;
            }
        }
        const v21 = [1337];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v22 = v21;
        const v23 = v8(v22);
        // v23 = .unknown
        const v25 = "__proto__"["__proto__"];
        // v25 = .unknown
        const v27 = Object.freeze(v25);
        // v27 = .undefined
        const v28 = v6 + 1;
        // v28 = .primitive
        v6 = v28;
    } while (v6 < 3);
}
}
%NeverOptimizeFunction(main);
main();
