function main() {
for (let v3 = 0; v3 < 3; v3++) {
    function v4(v5,v6) {
        let v14 = 0;
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                try {
                    let v20 = DataView;
                } catch(v21) {
                }
                const v22 = v18 + 1;
                // v22 = .primitive
                v18 = v22;
            } while (v18 < 8);
        }
        do {
            const v23 = "boolean" + 1;
            // v23 = .primitive
            v14 = v23;
        } while (v14 === 3);
    }
    const v26 = [1337];
    // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v27 = v26;
    const v28 = v4(v27);
    // v28 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
