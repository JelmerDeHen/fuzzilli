function main() {
for (const v8 in "boolean") {
    let v10 = 0;
    function v11(v12,v13) {
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
                const v20 = v10 * v19;
                // v20 = .number
                const v21 = "unscopable".padEnd(1337,v15);
                // v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
                const v22 = typeof v20;
                // v22 = .string
            } while (v18 < 8);
        }
    }
    const v24 = v11(1337);
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();