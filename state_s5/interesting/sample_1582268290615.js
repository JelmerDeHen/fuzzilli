function main() {
for (let v3 = 0; v3 < 3; v3++) {
    function v5(v6,v7) {
        let v14 = 0;
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                const v20 = [1337];
                // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                const v21 = Array.isArray(v20);
                // v21 = .boolean
                let v24 = 0;
                const v25 = v24 + 1;
                // v25 = .primitive
                v24 = v25;
                let v28 = 0;
                const v29 = v18 + 1;
                // v29 = .primitive
                v18 = v29;
            } while (v18 < 8);
        }
        const v30 = v14 + 1;
        // v30 = .primitive
        v14 = v30;
    }
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v34 = v33;
    const v35 = v5(v34);
    // v35 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
