function main() {
let v20 = 0;
do {
    const v21 = v20 + 1;
    // v21 = .primitive
    function v22(v23,v24) {
        const v25 = v23 in v22;
        // v25 = .boolean
        let v39 = 0;
        for (const v40 in "boolean") {
            let v43 = 0;
            do {
                let v46 = 0;
                v20 = v25;
                const v49 = v46 + 1;
                // v49 = .primitive
                v46 = v49;
                let v52 = 0;
                const v57 = v43 + 1;
                // v57 = .primitive
                v43 = v57;
            } while (v43 < 8);
        }
        const v58 = v39 + 1;
        // v58 = .primitive
        v39 = v58;
    }
    const v61 = [1337];
    // v61 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v62 = v61;
    const v63 = v22(v62);
    // v63 = .unknown
    v20 = v21;
} while (v20 < 7);
}
%NeverOptimizeFunction(main);
main();
