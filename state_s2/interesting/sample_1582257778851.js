function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                v10 = v11;
            } while (v10 < 7);
            const v12 = v7 + 1;
            // v12 = .primitive
            v7 = v12;
        } while (v7 < 8);
    }
    function v13(v14,v15) {
        const v16 = v14 in v13;
        // v16 = .boolean
        for (const v18 in "boolean") {
            let v21 = 0;
            do {
                for (const v23 of "pvU0UUjoya") {
                }
                const v24 = v21 + 1;
                // v24 = .primitive
                v21 = v24;
            } while (v21 < 8);
        }
        const v26 = [13.37,13.37,13.37,13.37,13.37];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    }
    const v29 = [1337];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v30 = v29;
    const v31 = v13(v30);
    // v31 = .unknown
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
const v36 = v0();
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
