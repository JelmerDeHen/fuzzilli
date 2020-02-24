function main() {
for (const v3 in "boolean") {
    let v6 = 0;
    function v7(v8,v9) {
        const v10 = v8 in v7;
        // v10 = .boolean
        for (const v12 in "boolean") {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
                const v17 = v6 * v10;
                // v17 = .number
                const v18 = "unscopable".padEnd(1337,v12);
                // v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
                const v19 = typeof v17;
                // v19 = .string
                const v21 = v19 === "object";
                // v21 = .boolean
            } while (v15 < 8);
        }
    }
    const v23 = v7(1337);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
