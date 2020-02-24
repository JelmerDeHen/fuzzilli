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
                // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                const v15 = {b:2147483647};
                // v15 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
                function v16(v17,v18) {
                    try {
                        for (const v19 in v14) {
                        }
                    } catch(v20) {
                    }
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
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v25 = v24;
const v26 = v0(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
