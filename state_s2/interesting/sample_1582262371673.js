function main() {
let v1 = Number;
let v4 = 0;
do {
    const v5 = v4 + 1;
    // v5 = .primitive
    function v6(v7,v8) {
        for (let v13 = 0; v13 < 10; v13++) {
            let v15 = 0;
            const v16 = ~v15;
            // v16 = .boolean
        }
        let v19 = 0;
        for (const v20 in "boolean") {
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
        }
        const v24 = v19 + 1;
        // v24 = .primitive
        const v25 = v24 - 0;
        // v25 = .number
        const v26 = v25 / 3;
        // v26 = .number
        v1 = v26;
        for (const v28 in "object") {
        }
    }
    const v30 = [1337];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v31 = v30;
    const v32 = v6(v31);
    // v32 = .unknown
    v4 = v5;
} while (v4 < 7);
}
%NeverOptimizeFunction(main);
main();
