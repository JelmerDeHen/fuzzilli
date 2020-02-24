function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        let v10 = 0;
        const v11 = 7 + 1;
        // v11 = .primitive
        do {
            const v12 = v10 + 1;
            // v12 = .primitive
            if (v1) {
            } else {
                const v13 = typeof v11;
                // v13 = .string
                const v15 = v13 === "symbol";
                // v15 = .boolean
            }
            const v17 = [13.37,13.37,13.37,13.37,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v18 = v17;
            for (const v19 of v18) {
            }
            v10 = v12;
        } while (v10 < 7);
        const v20 = v7 + 1;
        // v20 = .primitive
        v7 = v20;
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
