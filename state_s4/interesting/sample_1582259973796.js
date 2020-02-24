function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    let v15 = 0;
    do {
        const v16 = v15 + 1;
        // v16 = .primitive
        function v17(v18,v19) {
            for (const v21 in "boolean") {
                const v24 = 8 + 1;
                // v24 = .primitive
                v18[v24] = 7;
            }
        }
        const v26 = [1337];
        // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v27 = v26;
        const v28 = v17(v27);
        // v28 = .unknown
        v15 = v16;
    } while (v15 < 7);
    for (let v33 = 0; v33 < 100; v33++) {
    }
}
}
%NeverOptimizeFunction(main);
main();
