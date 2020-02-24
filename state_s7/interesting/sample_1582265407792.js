function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (let v10 = 0; v10 < 10; v10 = v10 + v3) {
            const v11 = v10 == "boolean";
            // v11 = .boolean
            const v12 = v11 <= v10;
            // v12 = .boolean
            for (let v16 = 0; v16 < 8; v16++) {
                let v17 = v12;
            }
        }
    }
    const v19 = [2147483647];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v20 = v19;
    const v21 = v4(v20);
    // v21 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
