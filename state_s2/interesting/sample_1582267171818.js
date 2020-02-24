function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
for (const v7 in "object") {
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    let v15 = 0;
    function v29(v30,v31) {
        for (const v33 in "boolean") {
            let v36 = 0;
            do {
                let v39 = 0;
                const v40 = v39 + 1;
                // v40 = .primitive
                v39 = v40;
                const v41 = v36 + 1;
                // v41 = .primitive
                v36 = v41;
            } while (v36 < 8);
        }
        const v44 = [13.37,13.37,13.37,13.37,13.37];
        // v44 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v46 = [1337];
        // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v47 = [v44,v46,Uint16Array];
        // v47 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v48 = v47.slice(0);
        // v48 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    }
    const v50 = [1337];
    // v50 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v51 = v50;
    const v52 = v29(v51);
    // v52 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
