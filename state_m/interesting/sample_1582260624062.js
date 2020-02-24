function main() {
for (const v3 in "boolean") {
    function v4(v5,v6) {
        const v7 = v5 in v4;
        // v7 = .boolean
        for (const v9 in "boolean") {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                v12 = v13;
                const v14 = v13 * v7;
                // v14 = .number
                const v15 = "unscopable".padEnd(1337,v9);
                // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
                const v16 = typeof v14;
                // v16 = .string
            } while (v12 < 8);
        }
    }
    const v18 = v4(2600425381);
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
