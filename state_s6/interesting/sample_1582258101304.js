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
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v23 = v22;
    const v24 = v6(v23);
    // v24 = .unknown
    const v25 = v6(1024,4.0);
    // v25 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
