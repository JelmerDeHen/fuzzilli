function main() {
let v1 = undefined;
for (const v3 in "undefined") {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    let v9 = 1337;
    function v11(v12,v13) {
        for (const v15 in "boolean") {
            let v18 = 0;
            let v21 = 0;
            const v22 = v21 + 1;
            // v22 = .primitive
            const v23 = v15 << 3;
            // v23 = .integer
            v9 = v23;
            v21 = v22;
            const v24 = v18 + 1;
            // v24 = .primitive
            v18 = v24;
        }
    }
    const v26 = [1337];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v27 = v26;
    const v28 = v11(v27);
    // v28 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
