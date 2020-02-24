function main() {
for (let v4 = -2; v4 < 100; v4++) {
    const v6 = [13.37,13.37,13.37];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v8(v9,v10) {
        for (const v12 in "boolean") {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v6.length = v16;
                v15 = v16;
            } while (v15 < 7);
        }
        const v17 = v6[0];
        // v17 = .unknown
        v6[v4] = "eTm8XK*Max";
    }
    const v20 = [1337];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v21 = v20;
    const v22 = v8(v21);
    // v22 = .unknown
    const v23 = v8(1024,4.0);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
