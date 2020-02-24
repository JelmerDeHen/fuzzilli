function main() {
for (const v1 in "boolean") {
    const v3 = [1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v4 = (1337).constructor;
    // v4 = .unknown
    const v5 = {set:v4,get:v4};
    // v5 = .object(ofGroup: Object, withProperties: ["get", "set", "__proto__"])
    const v7 = Object.defineProperty(v3,v1,v5);
    // v7 = .undefined
    const v9 = Object.entries(v3);
    // v9 = .object()
}
}
%NeverOptimizeFunction(main);
main();
