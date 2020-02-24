function main() {
function v2(v3,v4) {
    let v7 = 0;
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        // v11 = .primitive
        const v12 = v7 && Int8Array;
        // v12 = .boolean
        const v13 = 0 & v12;
        // v13 = .integer
        for (let v20 = 0; v20 < 8; v20++) {
            for (let v24 = 0; v24 < 4; v24++) {
                let v27 = 0;
                const v28 = v24 << v13;
                // v28 = .integer
                const v29 = v27 + 1;
                // v29 = .primitive
                v27 = v29;
            }
        }
        v10 = v11;
    } while (v10 < 7);
    const v33 = v7 + 1;
    // v33 = .primitive
    let v37 = 0;
    const v38 = v37 + 1;
    // v38 = .primitive
    v37 = v38;
    let v40 = 0;
    v7 = v33;
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v43 = v42;
const v44 = v2(v43);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
