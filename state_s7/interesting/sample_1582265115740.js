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
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v15 = v14;
    const v16 = v2(v15);
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
