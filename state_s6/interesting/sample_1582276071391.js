function main() {
for (const v3 in "boolean") {
    function v4(v5,v6) {
        const v7 = v5 in v4;
        // v7 = .boolean
        for (const v9 in "boolean") {
            let v11 = 0;
            for (const v13 in "object") {
            }
            const v14 = ~v11;
            // v14 = .boolean
            const v15 = v14 - v7;
            // v15 = .number
            const v16 = "unscopable".padEnd(1337,v9);
            // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v17 = typeof v15;
            // v17 = .string
        }
    }
    const v19 = v4(0);
    // v19 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
