function main() {
for (let v4 = 0; v4 < 2; v4++) {
    function v6(v7,v8) {
        const v9 = v7 in v6;
        // v9 = .boolean
        for (const v11 in "boolean") {
            let v14 = 0;
            for (const v16 of "pvU0UUjoya") {
            }
            const v17 = v14 + 1;
            // v17 = .primitive
            v14 = v17;
        }
        let v18 = v9;
        const v19 = v18.__proto__;
        // v19 = .unknown
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v23 = v22;
    const v24 = v6(v23);
    // v24 = .unknown
    const v25 = v6(1024,4.0);
    // v25 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
