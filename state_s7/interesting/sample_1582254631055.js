function main() {
for (const v1 in "object") {
    const v3 = [1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v5 = {constructor:"symbol",length:"symbol"};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
    const v7 = Reflect.preventExtensions(v5);
    // v7 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
