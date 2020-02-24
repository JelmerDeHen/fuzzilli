function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v10 = {};
            // v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                v13 = v14;
            } while (v13 < 7);
            const v15 = v13 < 7;
            // v15 = .boolean
            let v16 = v15;
            if (v3) {
                let v19 = 0;
                while (v19 < 1) {
                    const v20 = v16 < 0;
                    // v20 = .boolean
                    const v21 = v19 + 1;
                    // v21 = .primitive
                    v19 = v21;
                }
            } else {
                function v22(v23,v24,v25,v26) {
                    const v27 = v3(v1,v13);
                    // v27 = .unknown
                }
            }
            const v28 = v9 + 1;
            // v28 = .primitive
            v9 = v28;
        } while (v9 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v31 = v30;
const v32 = v2(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
