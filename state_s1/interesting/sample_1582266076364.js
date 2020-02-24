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
                // v25 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
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
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v30 = v29;
const v31 = v3(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
