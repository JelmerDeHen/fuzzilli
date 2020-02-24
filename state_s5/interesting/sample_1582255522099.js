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
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
