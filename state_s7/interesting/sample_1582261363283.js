function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = {a:isFinite};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            do {
                const v15 = v14 + 1;
                // v15 = .primitive
                v14 = v15;
            } while (v14 < 7);
            const v16 = v11 + 1;
            // v16 = .primitive
            v11 = v16;
        } while (v11 < 8);
    }
    let v19 = 0;
    const v20 = v19 * 1337;
    // v20 = .number
    const v21 = v19 + 1;
    // v21 = .primitive
    function v22(v23,v24) {
        let v25 = v20;
        return v19;
    }
}
const v26 = v4(v3);
// v26 = .unknown
const v27 = v1 - 1;
// v27 = .primitive
const v28 = v4(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
