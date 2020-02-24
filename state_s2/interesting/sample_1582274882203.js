function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        const v10 = [13.37];
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v11 = v10;
        for (const v13 of v11) {
            const v14 = 1 >> v13;
            // v14 = .integer
        }
        v11[5] = 0;
        let v17 = 0;
        do {
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            const v19 = typeof v7;
            // v19 = .string
            const v21 = v19 === "number";
            // v21 = .boolean
            if (v21) {
            } else {
            }
        } while (v17 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v24 = v23;
const v25 = v3(v24);
// v25 = .unknown
const v26 = v3(v2,v2);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
