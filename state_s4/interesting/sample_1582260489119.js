function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
for (const v9 in "boolean") {
    let v12 = 0;
    let v15 = 0;
    const v17 = [1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v19 = Object.freeze(v17);
    // v19 = .undefined
    const v20 = v15 + 1;
    // v20 = .primitive
    v15 = v20;
    for (const v21 in v17) {
    }
    let v24 = 0;
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
    let v28 = 0;
    const v32 = v12 + 1;
    // v32 = .primitive
    v12 = v32;
}
}
%NeverOptimizeFunction(main);
main();
