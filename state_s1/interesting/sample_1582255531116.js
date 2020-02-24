function main() {
let v2 = 0;
while (v2 < 8) {
    function v3(v4,v5) {
        let v12 = 0;
        for (const v13 in "boolean") {
            let v16 = 0;
            for (const v17 of v13) {
            }
            const v18 = v16 + 1;
            // v18 = .primitive
            v16 = v18;
        }
        const v19 = v12 + 1;
        // v19 = .primitive
        v12 = v19;
    }
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v22 = v21;
    const v23 = v3(v22);
    // v23 = .unknown
    const v24 = v2 + 1;
    // v24 = .primitive
    v2 = v24;
}
}
%NeverOptimizeFunction(main);
main();
