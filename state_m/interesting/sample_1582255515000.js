function main() {
let v2 = 0;
while (v2 < 8) {
    function v3(v4,v5) {
        let v12 = 0;
        for (const v13 in "boolean") {
            let v16 = 0;
            for (const v17 of v13) {
            }
            const v18 = v16 + 1;
            // v18 = .primitive
            v16 = v18;
        }
        const v19 = v12 + 1;
        // v19 = .primitive
        v12 = v19;
    }
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v22 = v21;
    const v23 = v3(v22);
    // v23 = .unknown
    const v24 = v2 + 1;
    // v24 = .primitive
    v2 = v24;
}
}
%NeverOptimizeFunction(main);
main();
