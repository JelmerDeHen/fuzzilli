function main() {
const v2 = ["a",1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
