function main() {
for (const v3 in "boolean") {
    let v8 = 0;
    let v10 = 0;
    const v11 = v8 + 1;
    // v11 = .primitive
    v8 = v11;
    function v12(v13,v14) {
        const v15 = v13 in v12;
        // v15 = .boolean
        for (const v17 in "boolean") {
            let v19 = 9007199254740991;
            for (const v21 in "object") {
            }
            const v22 = ~v19;
            // v22 = .boolean
            const v23 = v22 - v15;
            // v23 = .number
            const v24 = "unscopable".padEnd(1337,v17);
            // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v25 = typeof v23;
            // v25 = .string
        }
    }
    let v30 = 0;
    const v35 = {__proto__:536870912};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v36 = v12(0);
    // v36 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
