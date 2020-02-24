function main() {
for (let v3 = 0; v3 < 3; v3++) {
    let v6 = 0;
    do {
        function v7(v8,v9) {
            for (const v11 in "asyncIterator") {
                if (v8) {
                } else {
                    const v13 = [1337];
                    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                }
            }
        }
        const v15 = [1337];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v16 = v15;
        const v17 = v7(v16);
        // v17 = .unknown
        const v18 = v6 + 1;
        // v18 = .primitive
        v6 = v18;
    } while (v6 < 3);
}
}
%NeverOptimizeFunction(main);
main();
