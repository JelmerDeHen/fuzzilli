function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        const v11 = [13.37,13.37,13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v13 = {b:2147483647};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        function v14(v15,v16) {
            for (const v17 in v7) {
            }
            for (let v21 = 0; v21 < 3; v21++) {
                for (let v25 = 0; v25 < 3; v25++) {
                    for (let v29 = 0; v29 < 3; v29++) {
                        const v30 = v11.unshift(v29,3);
                        // v30 = .integer
                    }
                }
            }
            v15["boolean"] = v13;
        }
        const v31 = v11.forEach(v14,v13);
        // v31 = .undefined
        let v34 = 0;
        do {
            let v37 = 0;
            do {
            } while (v37 < 0);
            const v38 = v34 + 1;
            // v38 = .primitive
            v34 = v38;
        } while (v34 < 8);
    }
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v41 = v40;
const v42 = v5(v41);
// v42 = .unknown
const v43 = v5(v3);
// v43 = .unknown
const v44 = v5(v41,v41);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
