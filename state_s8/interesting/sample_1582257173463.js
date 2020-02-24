function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            let v23 = 0;
            do {
                const v24 = "object" + 1;
                // v24 = .primitive
                v23 = v24;
            } while (v23 < 7);
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
            let v31 = 0;
            do {
                const v32 = v31 + 1;
                // v32 = .primitive
                v31 = v32;
            } while (v31 < 3);
            const v33 = v20 + 1;
            // v33 = .primitive
            v20 = v33;
        } while (v20 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v13(v36);
// v37 = .unknown
const v38 = gc();
// v38 = .undefined
const v39 = v13(1337,-828296917);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
