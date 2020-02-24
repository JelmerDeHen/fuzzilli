function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v5(v6,v7) {
            for (const v9 in "boolean") {
                const v12 = [];
                // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                let v13 = "function";
                let v14 = 64;
                const v15 = v14 >> v9;
                // v15 = .integer
                v12[v15] = v13;
            }
        }
        const v16 = [v5];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v17 = v16;
        const v18 = v5(v17);
        // v18 = .unknown
        const v19 = v4 + 1;
        // v19 = .primitive
        v4 = v19;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
