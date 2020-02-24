function main() {
for (const v1 in "object") {
    function v3(v4,v5) {
        const v7 = new Array();
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        for (const v8 in "boolean") {
            let v11 = 0;
            do {
                let v14 = 0;
                const v15 = v14 + 1;
                // v15 = .primitive
                v14 = v15;
                const v16 = v11 + 1;
                // v16 = .primitive
                v11 = v16;
            } while (v11 < 8);
        }
    }
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v19 = v18;
    const v20 = v3(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
