function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 0;
for (const v8 in "boolean") {
    const v10 = [-0.0];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v12 = Object.seal(v10);
    // v12 = .object()
    let v15 = 0;
    while (v15 < 6) {
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
    }
    const v17 = v10[1000];
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
