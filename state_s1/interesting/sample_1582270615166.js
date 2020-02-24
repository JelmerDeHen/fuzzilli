function main() {
for (const v3 in "boolean") {
    function v4(v5,v6) {
        const v7 = v5 in v4;
        // v7 = .boolean
        for (const v9 in "boolean") {
            let v11 = 2177415573;
            for (const v13 in "object") {
            }
            const v14 = v11 + 1;
            // v14 = .primitive
            const v15 = v14 * v7;
            // v15 = .number
            const v16 = "unscopable".padEnd(-9007199254740993,v9);
            // v16 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            const v17 = typeof v15;
            // v17 = .string
        }
    }
    const v19 = v4(2600425381);
    // v19 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
