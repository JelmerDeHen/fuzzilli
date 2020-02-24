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
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
