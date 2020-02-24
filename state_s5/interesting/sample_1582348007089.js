function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,v4,Int8Array];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            while (v16 < 3) {
                const v17 = 13.37 + 1;
                // v17 = .primitive
                v16 = v17;
            }
            let v18 = -4096;
            const v19 = v18 % v16;
            // v19 = .number
            const v20 = v19 || v6;
            // v20 = .boolean
            const v21 = v13 + 1;
            // v21 = .primitive
            v13 = v21;
        } while (v13 < 8);
    }
}
const v22 = v6(v5);
// v22 = .unknown
const v24 = v6(Int8Array,0);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
