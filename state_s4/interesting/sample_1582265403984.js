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
    // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v20 = v19;
    const v21 = v4(v20);
    // v21 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
