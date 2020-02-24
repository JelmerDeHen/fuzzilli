function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 7;
    function v11(v12,v13) {
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
                const v26 = v21 + 1;
                // v26 = .primitive
                v21 = v26;
            } while (v21 < 8);
        }
        do {
            const v27 = v17 + 1;
            // v27 = .primitive
            v17 = v27;
        } while (v17 < 3);
        for (const v29 in "object") {
        }
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v33 = v32;
    const v34 = v11(v33);
    // v34 = .unknown
    const v35 = v11(1024,4.0);
    // v35 = .unknown
    let v38 = 0;
    const v39 = v38 + 1;
    // v39 = .primitive
    v38 = v39;
    const v40 = v9 + 1;
    // v40 = .primitive
    v9 = v40;
}
}
%NeverOptimizeFunction(main);
main();
