function main() {
function v1(v2,v3) {
    let v7 = 0;
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            do {
                const v15 = v14 + 1;
                // v15 = .primitive
                v14 = v15;
            } while (v14 < 7);
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            function v20(v21,v22,v23,v24,v25) {
            }
            try {
                const v26 = v11 instanceof Float64Array;
                // v26 = .boolean
            } catch(v27) {
            }
            const v28 = v11 + 1;
            // v28 = .primitive
            v11 = v28;
        } while (v11 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v31 = v30;
const v32 = v1(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
