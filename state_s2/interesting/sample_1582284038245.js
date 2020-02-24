function main() {
const v0 = -Infinity;
// v0 = .float
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (const v7 in "object") {
    let v8 = v7;
    const v9 = v5.fill(v0);
    // v9 = .undefined
    v8 = v5;
    const v10 = v8.forEach(parseInt,v3);
    // v10 = .undefined
    v8[257] = v10;
}
}
%NeverOptimizeFunction(main);
main();
