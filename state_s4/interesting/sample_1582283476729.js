function main() {
const v6 = [13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v11 in "object") {
    let v12 = v11;
    const v13 = v9.fill("constructor");
    // v13 = .undefined
    v12 = v9;
    const v14 = v12.forEach(parseInt,v6);
    // v14 = .undefined
    v12[257] = "symbol";
}
}
%NeverOptimizeFunction(main);
main();
