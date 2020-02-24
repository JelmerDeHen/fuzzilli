function main() {
let v3 = 0;
let v6 = 0;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = [1337,v8];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v11(v12,v13) {
    for (const v15 in "boolean") {
        const v17 = [13.37,13.37,13.37,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v19 = {b:2147483647};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        function v20(v21,v22) {
            for (let v26 = 0; v26 < 3; v26++) {
                for (const v30 of v12) {
                }
            }
        }
        const v34 = v17.forEach(v20,v19);
        // v34 = .undefined
        let v37 = 0;
        let v40 = 0;
        const v41 = v37 + 1;
        // v41 = .primitive
        v37 = v41;
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v44 = v43;
const v45 = v11(v10);
// v45 = .unknown
const v46 = v11(v44,v44);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
