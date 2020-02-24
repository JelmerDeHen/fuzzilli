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
            // v17 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            const v18 = typeof v16;
            // v18 = .string
        }
        if (v8) {
            const v19 = Object.values(v7);
            // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        } else {
        }
    }
    const v21 = v5(2600425381);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
