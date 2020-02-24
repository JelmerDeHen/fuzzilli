function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v5(v6,v7) {
        for (const v9 in "boolean") {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                const v14 = v12 | v2;
                // v14 = .integer
                v12 = v13;
                const v15 = "__proto__".slice(v14,v7);
                // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            } while (v12 < 7);
        }
    }
    const v17 = [1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v18 = v17;
    const v19 = v5(v18);
    // v19 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
