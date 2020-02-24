function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v5(v6,v7) {
            for (const v9 in "boolean") {
                const v11 = [];
                // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
                let v12 = "function";
                let v13 = v9;
                const v14 = v13 >> 8;
                // v14 = .integer
                v11[v14] = v12;
            }
        }
        const v15 = [v5];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
