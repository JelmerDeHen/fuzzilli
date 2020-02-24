function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v5(v6,v7) {
            for (let v11 = 0; v11 < 3; v11++) {
                let v14 = 0;
                do {
                    const v16 = "iterator" + v11;
                    // v16 = .primitive
                    const v18 = v14 + 1;
                    // v18 = .primitive
                    v14 = v18;
                    function v19(v20,v21,v22) {
                        'use strict'
                    }
                } while (v14 < 3);
            }
        }
        const v24 = [1337];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v25 = v24;
        const v26 = v5(v25);
        // v26 = .unknown
        const v27 = v4 + 1;
        // v27 = .primitive
        v4 = v27;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
