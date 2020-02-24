function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    const v5 = [1337];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v6 = v5;
    let v8 = undefined;
    for (const v13 in "boolean") {
        let v16 = RegExp;
        const v17 = v16("eeeRbEqfAO");
        // v17 = .object()
        function v19(v20,v21) {
            for (const v23 in "boolean") {
                let v26 = 0;
                const v28 = v26 + 1;
                // v28 = .primitive
                v17.toString = this;
                v26 = v28;
            }
        }
        const v30 = [1337];
        // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v31 = v30;
        const v32 = v19(v31);
        // v32 = .unknown
    }
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
