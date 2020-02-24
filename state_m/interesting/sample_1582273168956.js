function main() {
for (const v2 in "object") {
    function v4(v5,v6) {
        const v7 = String.fromCodePoint(v2);
        // v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        let v10 = 0;
        const v11 = v7.padStart(v5,v7);
        // v11 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        const v12 = v10 + 1;
        // v12 = .primitive
        v10 = v12;
        for (const v14 in "boolean") {
            let v17 = 0;
            do {
                let v19 = 0;
                do {
                    const v20 = v19 + 1;
                    // v20 = .primitive
                    v19 = v20;
                } while (v19 < 7);
                const v21 = v17 + 1;
                // v21 = .primitive
                v17 = v21;
            } while (v17 < 8);
        }
    }
    const v23 = v4("undefined",4.0);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
