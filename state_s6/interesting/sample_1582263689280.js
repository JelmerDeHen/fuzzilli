function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
