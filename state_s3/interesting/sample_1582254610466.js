function main() {
for (const v1 in "object") {
    const v3 = [1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v5 = {constructor:"symbol",length:"symbol"};
    // v5 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
    const v7 = Reflect.preventExtensions(v5);
    // v7 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
