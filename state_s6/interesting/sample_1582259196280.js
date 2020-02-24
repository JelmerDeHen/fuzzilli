function main() {
const v2 = [13.37,"boolean","boolean",13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = ["d",isFinite,isFinite,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {a:isFinite};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
            } while (v17 < 7);
            const v19 = v14 + 1;
            // v19 = .primitive
            v14 = v19;
        } while (v14 < 8);
    }
    let v23 = 0;
    let v25 = 0;
    const v26 = v25 * 1337;
    // v26 = .number
    const v27 = v25 + 1;
    // v27 = .primitive
    function v28(v29,v30) {
        let v34 = 0;
        let v35 = v26;
    }
}
const v36 = v7(v6);
// v36 = .unknown
const v37 = v5 - 1;
// v37 = .primitive
const v38 = v7(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
