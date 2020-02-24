function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v12 = 0;
            function v13(v14,v15,v16,v17) {
                'use strict'
                let v20 = -4096;
                let v21 = v20;
                const v22 = v21.toLocaleString();
                // v22 = .unknown
                const v23 = eval(v22);
                // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            }
            const v24 = v12 / 5.0;
            // v24 = .number
            const v25 = "__proto__".slice(v24,0);
            // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            const v26 = v10 + 1;
            // v26 = .primitive
            v10 = v26;
        } while (v10 < 8);
    }
}
const v27 = v3(13.37);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
