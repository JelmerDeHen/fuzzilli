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
    // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v20 = v19;
    const v21 = v4(v20);
    // v21 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
