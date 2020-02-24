function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v10 = typeof -4.0;
            // v10 = .string
            const v12 = v10 != "undefined";
            // v12 = .boolean
            const v13 = v8 + 1;
            // v13 = .primitive
            for (const v15 in "object") {
            }
            v8 = v13;
        } while (v8 < 8);
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
