function main() {
function v2(v3,v4) {
    const v5 = v3 in v2;
    // v5 = .boolean
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
        } while (v10 < 8);
    }
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v15 = v14;
const v16 = v2(v15);
// v16 = .unknown
const v17 = v2(1024,4.0);
// v17 = .unknown
const v18 = v15.reduce(v2,NaN);
// v18 = .unknown
let v21 = 0;
do {
    const v22 = v2(v21);
    // v22 = .unknown
    const v23 = v21 + 1;
    // v23 = .primitive
    v21 = v23;
} while (v21 < 10);
}
%NeverOptimizeFunction(main);
main();
