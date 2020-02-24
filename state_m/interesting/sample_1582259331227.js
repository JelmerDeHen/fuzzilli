function main() {
let v3 = 0;
let v6 = 0;
for (const v9 in "boolean") {
    function v10(v11,v12) {
        const v15 = 4294967297 + "iterator";
        // v15 = .primitive
        for (const v17 in "boolean") {
            let v20 = 0;
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            v23 = v24;
            const v25 = v20 + 1;
            // v25 = .primitive
            v20 = v25;
        }
        return v15;
    }
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v28 = v27;
    const v29 = v10(v28);
    // v29 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
