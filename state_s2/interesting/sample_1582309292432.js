function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5) {
    function v8(v9,v10) {
        for (const v12 in "boolean") {
            let v15 = -128;
            while (v15 < 5) {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
            }
        }
    }
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v19 = v18;
    const v20 = v8(v19);
    // v20 = .unknown
    const v21 = gc(...arguments);
    // v21 = .undefined
    const v22 = arguments + 1;
    // v22 = .primitive
    let v24 = 0;
    while (v24 < 1337) {
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    }
}
const v26 = v2.sort(v3);
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();
