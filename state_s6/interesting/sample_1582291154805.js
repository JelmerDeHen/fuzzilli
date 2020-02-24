function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v5 in "boolean") {
    function v6(v7,v8) {
        const v9 = v7 in v1;
        // v9 = .boolean
        for (const v11 in "boolean") {
            let v13 = 0;
            for (const v15 in "object") {
            }
            const v16 = ~v13;
            // v16 = .boolean
            const v17 = v16 - v9;
            // v17 = .number
            const v18 = "unscopable".padEnd(1337,v11);
            // v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v19 = typeof v17;
            // v19 = .string
        }
    }
    const v21 = v6(0);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
