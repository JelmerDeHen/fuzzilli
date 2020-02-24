function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v7 = [1337,1337,1337,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v8 = {b:2147483647};
        // v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
        function v9(v10,v11) {
            function v13(v14,v15) {
                function v16(v17,v18) {
                    const v20 = {ownKeys:v18,preventExtensions:v18,defineProperty:v16,getPrototypeOf:v18,deleteProperty:v18,has:v16,set:v17,apply:v18};
                    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "set", "getPrototypeOf", "deleteProperty", "ownKeys", "apply"], withMethods: ["defineProperty", "has"])
                    const v22 = new Proxy(v16,v20);
                    // v22 = .unknown
                    const v23 = {toString:0,...Proxy,...v16,...v22};
                    // v23 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
                }
                const v25 = [1337];
                // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                let v26 = v25;
                const v27 = v16(v26);
                // v27 = .unknown
            }
            const v29 = [1337];
            // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v30 = v29;
            const v31 = v13(v30);
            // v31 = .unknown
        }
        const v32 = v7.findIndex(v9,v8);
        // v32 = .integer
        const v33 = v4 + 1;
        // v33 = .primitive
        v4 = v33;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
