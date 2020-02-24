function main() {
const v2 = ["d",isFinite,isFinite,isFinite];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
    let v32 = 0;
    while (v32 < 7) {
        const v33 = "iterator".charCodeAt(1);
        // v33 = .integer
        const v34 = v32 + 1;
        // v34 = .primitive
        v32 = v34;
    }
    let v37 = 0;
    const v38 = v37 * 1337;
    // v38 = .number
    const v39 = v37 + 1;
    // v39 = .primitive
    v37 = v39;
}
const v40 = v4(v3);
// v40 = .unknown
const v41 = v2 - 1;
// v41 = .primitive
const v42 = v4(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
