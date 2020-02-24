function main() {
for (const v1 in "boolean") {
    const v3 = [1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
