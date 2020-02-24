function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        const v12 = Math.imul("valueOf",13.37,1337,DataView);
        // v12 = .integer
        for (const v13 in "valueOf") {
            let v16 = 0;
            do {
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
            } while (v16 < 8);
        }
        return v12;
    }
    const v19 = [1337];
    // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v20 = v19;
    const v21 = v4(v20);
    // v21 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
