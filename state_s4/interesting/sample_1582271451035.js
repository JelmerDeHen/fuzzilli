function main() {
for (const v1 in "object") {
    function v3(v4,v5) {
        const v7 = new Array();
        // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v19 = v18;
    const v20 = v3(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
