function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5) {
    const v6 = v4 in v3;
    // v6 = .boolean
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            try {
                let v20 = 0;
                const v21 = v20 + 1;
                // v21 = .primitive
                const v22 = v21 - 1;
                // v22 = .primitive
                const v24 = typeof 1;
                // v24 = .string
                function v25(v26,v27) {
                    const v28 = v26(v13,v24,v22,v26,v25);
                    // v28 = .unknown
                }
                let v31 = 0;
                for (let v34 = 0; v34 < 4; v34++) {
                }
                v20 = v21;
            } catch(v35) {
            }
            const v36 = v17 + 1;
            // v36 = .primitive
            v17 = v36;
        } while (v17 < 8);
    }
}
const v38 = v2.forEach(v3,"eeeRbEqfAO");
// v38 = .undefined
}
%NeverOptimizeFunction(main);
main();
