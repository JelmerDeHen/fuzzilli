function main() {
let v1 = Number;
let v4 = 0;
do {
    const v5 = v4 + 1;
    // v5 = .primitive
    function v6(v7,v8) {
        for (let v13 = 0; v13 < 10; v13++) {
            let v15 = -1047511627;
            const v16 = ~v15;
            // v16 = .boolean
        }
        for (const v19 in "boolean") {
            let v21 = 0;
        }
        const v22 = !v7;
        // v22 = .boolean
        const v23 = v22 - 0;
        // v23 = .number
        const v24 = v23 / 3;
        // v24 = .number
        v1 = v24;
        for (const v26 in "object") {
        }
    }
    const v28 = [1337];
    // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v29 = v28;
    const v30 = v6(v29);
    // v30 = .unknown
    v4 = v5;
} while (v4 < 7);
}
%NeverOptimizeFunction(main);
main();
