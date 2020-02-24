function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v9 = 0;
            let v11 = 0;
            const v12 = v9 + 1;
            // v12 = .primitive
            let v15 = 0;
            const v18 = [1337,1337,1337,v15];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v19 = {b:2147483647};
            // v19 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
            function v20(v21,v22) {
                for (const v23 in arguments) {
                }
            }
            const v24 = v18.findIndex(v20,v19);
            // v24 = .integer
            function v25(v26,v27,v28,v29,v30) {
            }
            const v31 = v7 + 1;
            // v31 = .primitive
            v7 = v31;
        } while (v7 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
