function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        let v13 = 0;
        let v16 = 0;
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
        const v18 = v13 + 1;
        // v18 = .primitive
        v13 = v18;
        const v19 = typeof -2900725722;
        // v19 = .string
        const v21 = v19 === "function";
        // v21 = .boolean
        do {
            let v24 = 0;
            with ("object") {
                const v25 = "boolean".charAt(1337);
                // v25 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            }
            do {
                const v26 = v24 + 1;
                // v26 = .primitive
                v24 = v26;
            } while (v24 < 7);
            const v27 = v10 + 1;
            // v27 = .primitive
            v10 = v27;
        } while (v10 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v30 = v29;
const v31 = v3(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
