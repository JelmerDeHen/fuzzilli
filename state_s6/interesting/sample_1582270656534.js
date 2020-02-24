function main() {
for (const v3 in "boolean") {
    function v4(v5,v6) {
        let v10 = 0;
        const v11 = v5 in v4;
        // v11 = .boolean
        for (const v13 in "boolean") {
            let v15 = 0;
            for (const v17 in "object") {
            }
            const v18 = ~v15;
            // v18 = .boolean
            const v19 = v18 | v11;
            // v19 = .integer
            const v20 = "unscopable".padEnd(1337,v13);
            // v20 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v21 = typeof v19;
            // v21 = .string
        }
    }
    const v23 = v4(2600425381);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
