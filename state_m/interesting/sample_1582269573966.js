function main() {
for (const v1 in "boolean") {
    const v3 = [1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v4 = (1337).constructor;
    // v4 = .unknown
    const v5 = {set:v4,get:v4};
    // v5 = .object(ofGroup: Object, withProperties: ["set", "get", "__proto__"])
    const v7 = Object.defineProperty(v3,v1,v5);
    // v7 = .undefined
    const v9 = Object.entries(v3);
    // v9 = .object()
}
}
%NeverOptimizeFunction(main);
main();
