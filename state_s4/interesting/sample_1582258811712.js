function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v4 = v3;
let v6 = undefined;
for (const v8 in "boolean") {
    let v11 = 0;
    do {
        function v13(v14,v15) {
            for (const v17 in "boolean") {
                let v20 = 0;
                const v22 = [];
                // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
        // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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