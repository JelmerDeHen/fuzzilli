function main() {
function v0(v1,v2) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            const v17 = v16 + 1;
            // v17 = .primitive
            let v20 = 0;
            while (v20 < 9) {
                const v21 = v20 % 9;
                // v21 = .number
                const v22 = v20 + 1;
                // v22 = .primitive
                v20 = v22;
            }
            v16 = v17;
            let v25 = 0;
            const v29 = v13 + 1;
            // v29 = .primitive
            v13 = v29;
        } while (v13 < 8);
    }
    const v30 = v9 + 1;
    // v30 = .primitive
    v9 = v30;
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();