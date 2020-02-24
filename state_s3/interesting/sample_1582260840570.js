function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v13 = v9;
        do {
            const v14 = 9007199254740992 | v13;
            // v14 = .integer
            const v15 = v13 + 1;
            // v15 = .primitive
            v13 = v15;
        } while (v13 < 2);
        let v16 = 0;
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
    }
}
let v20 = 0;
do {
    const v21 = v5(v4,6);
    // v21 = .unknown
    const v22 = v20 + 1;
    // v22 = .primitive
    v20 = v22;
} while (v20 < 6);
}
%NeverOptimizeFunction(main);
main();
