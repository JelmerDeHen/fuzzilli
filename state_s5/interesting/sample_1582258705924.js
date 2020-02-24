function main() {
let v2 = undefined;
let v5 = 0;
for (const v6 in "boolean") {
    let v8 = v5;
    const v9 = v8 >= 0;
    // v9 = .boolean
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
    const v13 = v9 / 4096;
    // v13 = .number
    delete v13[v13];
}
const v15 = [1337,1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();
