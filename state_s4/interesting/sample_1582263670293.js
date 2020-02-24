function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v3 in "boolean") {
    let v6 = 0;
    let v7 = v3;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    v1.length = v7;
    const v9 = v6 + 1;
    // v9 = .primitive
    v6 = v9;
}
}
%NeverOptimizeFunction(main);
main();
