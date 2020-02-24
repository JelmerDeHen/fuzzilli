function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
