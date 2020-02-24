function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        const v12 = v5 <= 10;
        // v12 = .boolean
        if (v12) {
            for (const v13 of v0) {
            }
        } else {
        }
        let v16 = 0;
        for (const v17 in "boolean") {
            let v20 = 0;
            do {
                let v23 = 0;
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
                let v27 = 0;
                const v28 = v20 + 1;
                // v28 = .primitive
                v20 = v28;
            } while (v20 < 8);
        }
        const v29 = v16 + 1;
        // v29 = .primitive
        v16 = v29;
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v33 = v32;
    const v34 = v5(v33);
    // v34 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
