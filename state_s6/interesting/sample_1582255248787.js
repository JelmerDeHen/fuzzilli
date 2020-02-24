function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = ["undefined",13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v4(v5,v6) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v15 = 0;
            const v16 = v15 + 1;
            // v16 = .primitive
            let v19 = 0;
            while (v19 < 9) {
                const v20 = v19 % 9;
                // v20 = .number
                const v21 = v19 + 1;
                // v21 = .primitive
                v19 = v21;
            }
            v15 = v16;
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            const v25 = v13 + 1;
            // v25 = .primitive
            v13 = v25;
        } while (v13 < 8);
    }
    const v26 = v9 + 1;
    // v26 = .primitive
    return v3;
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v29 = v28;
const v30 = v4(v29);
// v30 = .unknown
const v31 = v2[v2];
// v31 = .unknown
const v32 = v4(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
