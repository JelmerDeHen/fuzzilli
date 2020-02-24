function main() {
for (const v1 in "dInsSgHVvX") {
    function v2(v3,v4) {
        for (const v6 in "boolean") {
            let v8 = 0;
            do {
                const v9 = v2 + 1;
                // v9 = .primitive
                v8 = v9;
            } while (v8 <= v6);
        }
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v15 = v14;
    const v16 = v2(v15);
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
