function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
