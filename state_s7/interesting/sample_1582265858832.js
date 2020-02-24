function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (let v9 = 0; v9 < 10; v9 = v9 + v3) {
            const v10 = v9 <= v9;
            // v10 = .boolean
            for (let v14 = 0; v14 < 8; v14++) {
                let v15 = v10;
            }
        }
    }
    const v17 = [2147483647];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v18 = v17;
    const v19 = v4(v18);
    // v19 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
