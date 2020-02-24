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
            // v17 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v18 = typeof v16;
            // v18 = .string
        }
        if (v8) {
            const v19 = Object.values(v7);
            // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        } else {
        }
    }
    const v21 = v5(2600425381);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
