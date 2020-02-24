function main() {
const v2 = ["a",1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v5 = v4;
let v7 = undefined;
for (const v9 in "boolean") {
    let v12 = 0;
    let v15 = 0;
    do {
        const v16 = v15 + 1;
        // v16 = .primitive
        v2.length = v16;
        v15 = v16;
    } while (v15 < 7);
    const v17 = v12 + 1;
    // v17 = .primitive
    v12 = v17;
}
}
%NeverOptimizeFunction(main);
main();
