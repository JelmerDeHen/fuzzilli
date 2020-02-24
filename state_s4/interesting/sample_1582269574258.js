function main() {
for (const v1 in "boolean") {
    const v3 = [1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v4 = (1337).constructor;
    // v4 = .unknown
    const v5 = {set:v4,get:v4};
    // v5 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "get"])
    const v7 = Object.defineProperty(v3,v1,v5);
    // v7 = .undefined
    const v9 = Object.entries(v3);
    // v9 = .object()
}
}
%NeverOptimizeFunction(main);
main();
