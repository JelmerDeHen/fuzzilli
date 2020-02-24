function main() {
let v6 = 0;
let v9 = 0;
let v12 = 0;
let v15 = 0;
function v20(v21,v22) {
    for (const v24 in "boolean") {
        let v27 = 0;
        do {
            let v30 = 0;
            function v32(v33,v34) {
            }
            const v36 = [1337];
            // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v37 = v36;
            const v38 = v37.reduce(v32,NaN);
            // v38 = .unknown
            do {
                const v39 = v30 + 1;
                // v39 = .primitive
                v30 = v39;
            } while (v30 < 7);
            const v40 = v27 + 1;
            // v40 = .primitive
            v27 = v40;
        } while (v27 < 8);
    }
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v43 = v42;
const v44 = v20(v43);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
