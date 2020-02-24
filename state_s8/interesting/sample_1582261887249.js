function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v6 = [13.37,13.37,13.37];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v8 = [1337,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v10(v11,v12) {
        let v18 = 0;
        const v20 = v18 + 1;
        // v20 = .primitive
        v18 = v20;
        if (v11) {
            const v23 = v8.push("object",Uint16Array,"object");
            // v23 = .integer
        } else {
            const v24 = Uint16Array(v8);
            // v24 = .unknown
        }
        const v26 = Symbol.match;
        // v26 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v6[2] = v26;
    }
    const v29 = [1337];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v30 = v29;
    const v31 = v10(v30);
    // v31 = .unknown
    const v32 = v10(1024,4.0);
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
