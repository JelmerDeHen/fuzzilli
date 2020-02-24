function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                const v14 = [1337,1337,1337,1337];
                // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                const v15 = {b:2147483647};
                // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
                function v16(v17,v18) {
                    for (const v19 in v14) {
                    }
                    let v22 = 0;
                    let v25 = 0;
                    const v26 = v25 + 1;
                    // v26 = .primitive
                    v25 = v26;
                    const v27 = v22 + 1;
                    // v27 = .primitive
                    v22 = v27;
                    return v11;
                }
                const v28 = v14.findIndex(v16,v15);
                // v28 = .integer
                v10 = v11;
            } while (v10 < 7);
            const v29 = v7 + 1;
            // v29 = .primitive
            v7 = v29;
        } while (v7 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
