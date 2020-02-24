function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        const v10 = [13.37];
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v11 = v10;
        for (const v15 of v11) {
            const v16 = 1 >> v15;
            // v16 = .integer
        }
        v11[5] = 0;
        let v19 = 0;
        do {
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
            const v21 = typeof v7;
            // v21 = .string
            const v23 = v21 === "number";
            // v23 = .boolean
            if (v23) {
            } else {
            }
        } while (v19 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v26 = v25;
const v27 = v3(v26);
// v27 = .unknown
const v28 = v3(v2,v2);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
