function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        let v11 = 0;
        let v14 = 0;
        for (const v16 in "boolean") {
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
            const v23 = 1337 == -0.0;
            // v23 = .boolean
        }
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v26 = v25;
    const v27 = v4(v26);
    // v27 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
