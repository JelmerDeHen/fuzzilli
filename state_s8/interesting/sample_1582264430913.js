function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v8(v9,v10) {
        for (const v12 in "boolean") {
            let v15 = 0;
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                const v20 = v18 << v2;
                // v20 = .integer
                v18 = v19;
                const v21 = "__proto__".slice(v20,v10);
                // v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            } while (v18 < 7);
            const v22 = v15 + 1;
            // v22 = .primitive
            v15 = v22;
        }
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v26 = v25;
    const v27 = v8(v26);
    // v27 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
