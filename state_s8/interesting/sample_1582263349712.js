function main() {
for (const v3 in "boolean") {
    function v4(v5,v6) {
        const v7 = v5 in v4;
        // v7 = .boolean
        for (const v9 in "boolean") {
            let v12 = 0;
            for (const v14 in "object") {
            }
            const v16 = ~v12;
            // v16 = .boolean
            const v17 = v16 * v7;
            // v17 = .number
            const v18 = "unscopable".padEnd(1337,v9);
            // v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            const v19 = typeof v17;
            // v19 = .string
        }
    }
    const v21 = v4(2600425381);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
