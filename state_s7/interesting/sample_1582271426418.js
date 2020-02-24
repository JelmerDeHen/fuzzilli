function main() {
let v3 = 0;
const v5 = {a:isFinite};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            const v17 = v13 << v16;
            // v17 = .integer
            let v19 = 0;
            do {
                function v21(v22,v23) {
                    for (const v25 in "boolean") {
                        let v28 = 0;
                        do {
                            const v32 = [1337,v28,-4.0,1024];
                            // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                            let v35 = 0;
                            do {
                                const v37 = v35 + 1;
                                // v37 = .primitive
                                v35 = v37;
                                arguments[v23] = 8;
                            } while (v35 < 8);
                            const v38 = v23 + 1;
                            // v38 = .primitive
                            v28 = v38;
                        } while (v28 < 8);
                    }
                }
                const v40 = [1337];
                // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                let v41 = v40;
                const v42 = v21(v41);
                // v42 = .unknown
                const v43 = v19 + 1;
                // v43 = .primitive
                v19 = v43;
            } while (v19 < 7);
            const v44 = v13 + 1;
            // v44 = .primitive
            v13 = v44;
        } while (v13 < 8);
    }
}
const v45 = v6(v5);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
