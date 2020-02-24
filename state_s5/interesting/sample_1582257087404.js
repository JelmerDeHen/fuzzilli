function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                const v14 = [1337,1337,1337,1337];
                // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                const v15 = {b:2147483647};
                // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
                function v16(v17,v18) {
                    try {
                        for (const v19 in v14) {
                        }
                    } catch(v20) {
                    }
                    return v4;
                }
                const v21 = v14.findIndex(v16,v15);
                // v21 = .integer
                v10 = v11;
            } while (v10 < 7);
            const v22 = v7 + 1;
            // v22 = .primitive
            v7 = v22;
        } while (v7 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v25 = v24;
const v26 = v0(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
