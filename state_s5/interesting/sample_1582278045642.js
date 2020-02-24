function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v6 = [1337,1337,1337];
        // v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        for (let v10 = 0; v10 < 10; v10++) {
            function v12(v13,v14) {
                let v17 = 0;
                const v18 = v13 + "boolean";
                // v18 = .primitive
                const v19 = v17 + 1;
                // v19 = .primitive
                v17 = v19;
                let v22 = 0;
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            }
            const v24 = v12();
            // v24 = .unknown
        }
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v27 = v26;
const v28 = v0(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
