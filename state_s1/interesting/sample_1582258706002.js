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
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();
