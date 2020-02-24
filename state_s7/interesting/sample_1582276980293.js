function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
for (const v3 of v2) {
    function v4(v5,v6) {
        const v11 = [1337];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v12 = v11;
        let v14 = undefined;
        let v17 = 0;
        do {
            let v19 = v5;
            while (v19 < 512) {
                const v20 = v19 % 512;
                // v20 = .number
                const v21 = v20 + 1;
                // v21 = .primitive
                v19 = v12;
            }
            const v22 = v17 + 1;
            // v22 = .primitive
            v17 = v22;
        } while (v17 < 8);
        for (let v23 = 0; v23 < 100; v23++) {
        }
    }
    let v24 = 0;
    const v25 = v4(v24);
    // v25 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
