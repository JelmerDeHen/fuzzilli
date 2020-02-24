function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            let v9 = -2340774650;
            for (const v11 in "object") {
            }
            const v12 = v9 - 1;
            // v12 = .primitive
            const v13 = v12 - v5;
            // v13 = .number
            const v15 = [1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v16 = [v15,1337,v15];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            for (const v18 in "boolean") {
            }
            const v19 = typeof v13;
            // v19 = .string
        }
    }
    const v21 = v2(0);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
