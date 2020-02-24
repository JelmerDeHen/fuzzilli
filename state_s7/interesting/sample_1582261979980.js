function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v5(v6,v7) {
            for (const v9 in "boolean") {
                const v11 = [];
                // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                let v12 = "function";
                let v13 = v9;
                const v14 = v13 >> 8;
                // v14 = .integer
                v11[v14] = v12;
            }
        }
        const v15 = [v5];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v16 = v15;
        const v17 = v5(v16);
        // v17 = .unknown
        const v18 = v4 + 1;
        // v18 = .primitive
        v4 = v18;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
