function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        for (let v8 = 0; v8 < 6; v8++) {
            function v10(v11,v12) {
                let v14 = 0;
                let v16 = v14;
                if (v11) {
                    const v17 = "iterator".MIN_VALUE;
                    // v17 = .unknown
                    v16 = 6;
                } else {
                }
                const v18 = v16 >= 0;
                // v18 = .boolean
                return v16;
            }
            const v20 = [1337];
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v21 = v20;
            const v22 = v10(v21);
            // v22 = .unknown
            const v23 = v10();
            // v23 = .unknown
        }
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v26 = v25;
const v27 = v0(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
