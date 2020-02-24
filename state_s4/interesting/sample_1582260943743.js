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
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v19 = v18;
    const v20 = v5(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
