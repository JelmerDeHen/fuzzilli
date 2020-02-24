function main() {
for (const v1 in "object") {
    const v3 = [1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v5 = {constructor:"symbol",length:"symbol"};
    // v5 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
    const v7 = Reflect.preventExtensions(v5);
    // v7 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
