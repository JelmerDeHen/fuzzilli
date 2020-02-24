function main() {
function v0(v1,v2) {
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v15 = gc();
    // v15 = .undefined
    let v16 = 0;
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    const v21 = v16 + 1;
    // v21 = .primitive
    let v27 = 0;
    const v29 = [13.37,13.37];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v31 = [1337,1337,1337];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v32 = [v31,v29];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    for (const v34 in "object") {
        function v35(v36,v37) {
            for (const v39 in "boolean") {
                let v42 = 0;
                let v43 = 0;
                const v44 = v35 + 1;
                // v44 = .primitive
                v43 = v44;
                v36.e = v32;
            }
        }
        const v46 = [1337];
        // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v47 = v35(v35,v34);
        // v47 = .unknown
        let v48 = v46;
        const v49 = v35(v48);
        // v49 = .unknown
    }
    const v50 = v27 + 1;
    // v50 = .primitive
    v27 = v50;
    v16 = v21;
}
const v53 = [1337];
// v53 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v54 = v53;
const v55 = v0(v54);
// v55 = .unknown
const v56 = v0();
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
