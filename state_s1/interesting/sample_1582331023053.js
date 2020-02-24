function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
    const v19 = gc(...arguments);
    // v19 = .undefined
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v22 = v21;
    const v23 = v8(v22);
    // v23 = .unknown
    const v24 = gc(...arguments);
    // v24 = .undefined
    const v25 = arguments + 1;
    // v25 = .primitive
    let v27 = 0;
    while (v27 < 1337) {
        const v28 = v27 + 1;
        // v28 = .primitive
        v27 = v28;
    }
}
const v29 = v2.sort(v3);
// v29 = .undefined
}
%NeverOptimizeFunction(main);
main();
