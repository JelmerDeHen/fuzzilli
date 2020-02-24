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
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v33 = v32;
        const v34 = v9(v33);
        // v34 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();
