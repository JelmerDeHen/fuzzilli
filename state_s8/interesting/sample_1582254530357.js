function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "object") {
    const v7 = [1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    for (const v18 in v7) {
    }
    let v25 = 0;
    const v32 = v25 + 1;
    // v32 = .primitive
    v25 = v32;
}
}
%NeverOptimizeFunction(main);
main();
