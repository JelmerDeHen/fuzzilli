function main() {
let v1 = 0;
let v2 = v1;
const v3 = v2.toLocaleString();
// v3 = .unknown
function v7(v8,v9) {
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v24 = 0;
            do {
                const v25 = v24 + 1;
                // v25 = .primitive
                v24 = v25;
            } while (v24 < 7);
            let v28 = 0;
            const v32 = v21 + 1;
            // v32 = .primitive
            v21 = v32;
        } while (v21 < 8);
    }
    const v33 = v17 + 1;
    // v33 = .primitive
    v17 = v33;
    for (let v38 = 0; v38 < 3; v38++) {
        const v39 = 1 >> DataView;
        // v39 = .integer
    }
    const v40 = "undefined" < 1337;
    // v40 = .boolean
    let v43 = 0;
    let v46 = 0;
    const v47 = v46 + 1;
    // v47 = .primitive
    v46 = v47;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v50 = v49;
const v51 = v7(v50);
// v51 = .unknown
const v52 = v7();
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
