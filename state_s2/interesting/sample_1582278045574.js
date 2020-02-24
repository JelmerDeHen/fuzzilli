function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v6 = [1337,1337,1337];
        // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v27 = v26;
const v28 = v0(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
