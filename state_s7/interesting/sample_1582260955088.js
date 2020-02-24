function main() {
for (const v1 in "object") {
    let v4 = 0;
    function v5(v6,v7) {
        for (const v9 in "boolean") {
            let v11 = 0;
            do {
                const v12 = "boolean" + 1;
                // v12 = .primitive
                v11 = v12;
            } while (v11 < v9);
            for (let v16 = 0; v16 < 7; v16++) {
            }
        }
    }
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v19 = v18;
    const v20 = v5(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
