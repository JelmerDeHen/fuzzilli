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
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v19 = v18;
    const v20 = v5(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
