function main() {
for (const v1 in "object") {
    const v3 = [1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v5 = {constructor:"symbol",length:"symbol"};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
    const v7 = Reflect.preventExtensions(v5);
    // v7 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
