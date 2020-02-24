function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        const v10 = [];
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v11(v12,v13) {
            const v14 = v12 in v11;
            // v14 = .boolean
            let v17 = 0;
            for (let v21 = 0; v21 < 9; v21++) {
                v10[v21] = v14;
            }
            let v25 = 0;
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            const v30 = v25 + 1;
            // v30 = .primitive
            v25 = v30;
        }
        const v32 = [1337];
        // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v33 = v32;
        const v34 = v11(v33);
        // v34 = .unknown
        const v35 = v9 + 1;
        // v35 = .primitive
        v9 = v35;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
