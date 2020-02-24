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
            // v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
