function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
