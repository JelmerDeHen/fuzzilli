function main() {
let v3 = 0;
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        function v15(v16,v17) {
            let v20 = 0;
            do {
                let v22 = v16;
                do {
                    const v23 = v22 + 1;
                    // v23 = .primitive
                    v22 = v23;
                } while (v22 == 7);
                const v24 = v20 + 1;
                // v24 = .primitive
                v20 = v24;
            } while (v20 < 8);
        }
        const v26 = [1337];
        // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v27 = v26;
        const v28 = v15(v27);
        // v28 = .unknown
        const v29 = v15(1862007616,4.0);
        // v29 = .unknown
        do {
            for (const v34 of "pvU0UUjoya") {
            }
            const v35 = v12 + 1;
            // v35 = .primitive
            v12 = v35;
        } while (v12 < 8);
    }
}
const v36 = [-1024];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v37 = v36;
const v38 = v5(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
