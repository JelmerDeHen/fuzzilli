function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        const v7 = [13.37,13.37,13.37,13.37,13.37];
        // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v8 = [];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v9(v10,v11) {
            let v12 = v7;
            let v13 = v12;
            const v16 = new Proxy(v13,Object);
            // v16 = .unknown
            const v17 = Object.freeze(v16);
            // v17 = .undefined
        }
        const v18 = v7.some(v9,v8);
        // v18 = .boolean
        let v21 = 0;
        do {
            const v22 = v21 + 1;
            // v22 = .primitive
            for (const v24 in "description") {
            }
            v21 = v22;
        } while (v21 < 8);
    }
}
const v25 = v1(RegExp);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
