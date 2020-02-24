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
        for (const v19 in "boolean") {
            let v21 = 0;
            const v22 = v21 + 1;
            // v22 = .primitive
        }
        const v23 = v7 + 1;
        // v23 = .primitive
        const v24 = v23 - 0;
        // v24 = .number
        const v25 = v24 / 3;
        // v25 = .number
        v1 = v25;
        for (const v27 in "object") {
        }
    }
    const v29 = [1337];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v30 = v29;
    const v31 = v6(v30);
    // v31 = .unknown
    v4 = v5;
} while (v4 < 7);
}
%NeverOptimizeFunction(main);
main();
