function main() {
function v2(v3,v4) {
    for (const v7 in "boolean") {
        let v10 = 0;
        const v11 = (1337)[1337];
        // v11 = .unknown
        const v12 = v11 * v4;
        // v12 = .number
        do {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
            } while (v15 < 7);
            const v17 = [v12,v7,3,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v18 = v10 + 1;
            // v18 = .primitive
            v10 = v18;
        } while (v10 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v21 = v20;
const v22 = v2(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
