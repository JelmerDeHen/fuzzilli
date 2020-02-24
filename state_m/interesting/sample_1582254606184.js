function main() {
for (const v1 in "object") {
    const v3 = [1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v5 = {constructor:"symbol",length:"symbol"};
    // v5 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
    const v7 = Reflect.preventExtensions(v5);
    // v7 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
