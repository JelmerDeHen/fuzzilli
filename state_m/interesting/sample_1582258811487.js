function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v4 = v3;
let v6 = undefined;
for (const v8 in "boolean") {
    let v11 = 0;
    do {
        function v13(v14,v15) {
            for (const v17 in "boolean") {
                let v20 = 0;
                const v22 = [];
                // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                let v23 = "function";
                let v24 = 8;
                const v25 = v24 * v17;
                // v25 = .number
                v22[v25] = v23;
                const v26 = v20 + 1;
                // v26 = .primitive
                v20 = v26;
            }
        }
        const v27 = [v13];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v28 = v27;
        const v29 = v13(v28);
        // v29 = .unknown
        const v30 = v11 + 1;
        // v30 = .primitive
        v11 = v30;
    } while (v11 < 8);
}
}
%NeverOptimizeFunction(main);
main();
