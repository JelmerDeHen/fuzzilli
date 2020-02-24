function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        function v11(v12,v13) {
            let v16 = 0;
            do {
                let v18 = v12;
                do {
                    const v19 = v18 + 1;
                    // v19 = .primitive
                } while (v18 == 7);
                const v20 = v16 + 1;
                // v20 = .primitive
                v16 = v20;
            } while (v16 < 8);
        }
        const v22 = [1337];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v23 = v22;
        const v24 = v11(v23);
        // v24 = .unknown
        const v25 = v11(1862007616,4.0);
        // v25 = .unknown
        do {
            for (const v27 of "pvU0UUjoya") {
            }
            const v28 = v8 + 1;
            // v28 = .primitive
            v8 = v28;
        } while (v8 < 8);
    }
}
const v29 = [-1024];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v30 = v29;
const v31 = v1(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
