function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (const v3 in "boolean") {
    let v6 = 0;
    let v7 = v3;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    v1.length = v7;
    const v9 = v6 + 1;
    // v9 = .primitive
    v6 = v9;
}
}
%NeverOptimizeFunction(main);
main();
