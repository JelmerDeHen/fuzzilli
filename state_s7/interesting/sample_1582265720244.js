function main() {
let v1 = 0;
for (const v3 in "boolean") {
    let v6 = 0;
    do {
        function v7(v8,v9) {
            let v13 = v1;
            const v14 = v13 % -1;
            // v14 = .number
            const v15 = Number.isFinite();
            // v15 = .boolean
            const v16 = v14 + 1;
            // v16 = .primitive
            return v7;
        }
        const v18 = [7];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v19 = v18;
        const v20 = v7(v19);
        // v20 = .unknown
        const v21 = v6 + 1;
        // v21 = .primitive
        v6 = v21;
    } while (v6 < 8);
}
let v25 = 0;
let v28 = 0;
let v31 = 0;
}
%NeverOptimizeFunction(main);
main();
