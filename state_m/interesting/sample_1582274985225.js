function main() {
let v1 = Object;
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v11 = Math.cos(Math);
            // v11 = .number
            const v12 = v9 + 1;
            // v12 = .primitive
            for (const v14 in "object") {
                const v15 = v1(v11);
                // v15 = .object()
            }
            v9 = v12;
        } while (v9 < 8);
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v18 = v17;
const v19 = v2(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
