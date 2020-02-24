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
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v23 = v22;
    const v24 = v6(v23);
    // v24 = .unknown
    const v25 = v6(1024,4.0);
    // v25 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
