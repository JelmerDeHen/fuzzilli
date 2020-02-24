function main() {
let v5 = 0;
do {
    let v6 = undefined;
    function v8(v9,v10,v11,v12,...v13) {
        const v15 = [13.37,13.37,13.37,13.37];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v17 = [1337,v15];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v18 = {b:v17,a:v17,__proto__:v17};
        // v18 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__"])
        function v19(v20,v21) {
            for (const v22 of v18) {
            }
        }
        const v24 = [1337];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v25 = v24;
        const v26 = v19(v25);
        // v26 = .unknown
        for (let v30 = 0; v30 < 8; v30++) {
            v13[v19] = v6;
        }
        let v33 = 0;
        while (v33 < 10) {
            "boolean".length = 2292123525;
            const v35 = v33 + 1;
            // v35 = .primitive
            v33 = v35;
        }
    }
    const v36 = v8(1337);
    // v36 = .unknown
    const v37 = v5 + 1;
    // v37 = .primitive
    v5 = v37;
} while (v5 < 8);
}
%NeverOptimizeFunction(main);
main();
