function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
v2 = v3;
for (const v9 in "object") {
    function v11(v12,v13,v14) {
    }
    const v15 = v11[13.37];
    // v15 = .unknown
    with ("string") {
        for (const v18 in Array) {
        }
    }
    const v20 = [13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v21(v22,v23,v24,v25) {
        return v20;
    }
    let v28 = 0;
    while (v28 < 9) {
        const v32 = v28 + 1;
        // v32 = .primitive
        v28 = v32;
    }
}
}
%NeverOptimizeFunction(main);
main();
