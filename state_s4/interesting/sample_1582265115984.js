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
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v15 = v14;
    const v16 = v2(v15);
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
