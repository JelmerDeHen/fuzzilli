function main() {
for (const v1 in "boolean") {
    const v3 = [1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
