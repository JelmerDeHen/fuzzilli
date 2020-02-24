function main() {
for (const v4 in "boolean") {
    function v5(v6,v7) {
        const v8 = v6 in v5;
        // v8 = .boolean
        for (const v10 in "boolean") {
            let v12 = 2177415573;
            for (const v14 in "object") {
            }
            const v15 = v12 + 1;
            // v15 = .primitive
            const v16 = v15 * v8;
            // v16 = .number
            const v17 = "unscopable".padEnd(-9007199254740993,v10);
            // v17 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            const v18 = typeof v16;
            // v18 = .string
        }
        if (v8) {
            const v19 = Object.values(v7);
            // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        } else {
        }
    }
    const v21 = v5(2600425381);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
