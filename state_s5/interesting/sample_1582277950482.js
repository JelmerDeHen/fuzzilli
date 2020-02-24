function main() {
for (const v1 in "boolean") {
    let v4 = undefined;
    for (const v6 in "boolean") {
        function v9(v10,v11) {
            for (const v13 in "boolean") {
                let v16 = 0;
                function v17(v18,v19,v20,v21,...v22) {
                }
                const v26 = v16 + 1;
                // v26 = .primitive
                v16 = v26;
                let v28 = 0;
                const v30 = v17(13.37,"boolean",Int32Array,"boolean",v11,8,v16,v28,v10);
                // v30 = .unknown
            }
        }
        const v32 = [1337];
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v33 = v32;
        const v34 = v9(v33);
        // v34 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();
