function main() {
for (let v3 = 0; v3 < 3; v3++) {
    const v5 = [1337];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v6 = v5;
    let v8 = undefined;
    function v9(v10,v11) {
        const v12 = v10 in v9;
        // v12 = .boolean
        const v16 = [13.37,13.37,13.37,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v18 = [1337,v16];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v19 = {b:v18,a:v18,__proto__:v18};
        // v19 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__"])
        try {
            const v20 = v19 instanceof eval;
            // v20 = .boolean
        } catch(v21) {
        }
        let v27 = 0;
        for (const v28 in "boolean") {
            let v31 = 0;
            do {
                let v34 = 0;
                do {
                    const v35 = v34 + 1;
                    // v35 = .primitive
                    v34 = v35;
                } while (v34 < 7);
                let v38 = 0;
                const v42 = v31 + 1;
                // v42 = .primitive
                v31 = v42;
            } while (v31 < 8);
        }
        const v43 = v27 + 1;
        // v43 = .primitive
        v27 = v43;
    }
    const v46 = [1337];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v47 = v46;
    const v48 = v9(v47);
    // v48 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
