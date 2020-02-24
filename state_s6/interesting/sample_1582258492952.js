function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    function v10(v11,v12) {
        const v13 = v11 in v10;
        // v13 = .boolean
        for (const v15 in "boolean") {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
                const v23 = v9 * v13;
                // v23 = .number
            } while (v18 < 8);
        }
    }
    const v25 = v10(1337);
    // v25 = .unknown
    const v26 = v9 + 1;
    // v26 = .primitive
    v9 = v26;
}
}
%NeverOptimizeFunction(main);
main();
