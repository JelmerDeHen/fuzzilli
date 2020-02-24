function main() {
function v1(v2,v3) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v16 = 13.37;
            const v17 = 13.37 | v16;
            // v17 = .integer
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            } while (v20 < 7);
            let v24 = 0;
            const v28 = v15 + 1;
            // v28 = .primitive
            v15 = v28;
        } while (v15 < 8);
    }
    const v29 = v11 + 1;
    // v29 = .primitive
    v11 = v29;
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v33 = v32;
const v34 = v1(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
