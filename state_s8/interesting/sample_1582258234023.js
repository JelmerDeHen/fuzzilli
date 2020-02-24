function main() {
let v2 = 0;
while (v2 < 3) {
    function v3(v4,v5) {
        for (const v7 in "boolean") {
            let v10 = 0;
            do {
                try {
                    const v13 = [13.37,13.37,13.37,13.37];
                    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                    const v15 = {b:2147483647};
                    // v15 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
                    function v16(v17,v18) {
                        return v16;
                    }
                    const v19 = v13.forEach(v16,v15);
                    // v19 = .undefined
                } catch(v20) {
                }
                const v21 = v10 + 1;
                // v21 = .primitive
                v10 = v21;
            } while (v10 < 8);
        }
    }
    const v23 = [1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v24 = v23;
    const v25 = v3(v24);
    // v25 = .unknown
    const v26 = v2 + 1;
    // v26 = .primitive
    v2 = v26;
}
}
%NeverOptimizeFunction(main);
main();
