function main() {
const v1 = [256];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v14 = [1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v15(v16,v17) {
    for (const v19 in "boolean") {
        let v22 = 0;
        function v26(v27,v28,v29,v30,...v31) {
            let v34 = 0;
            const v35 = v34 + 1;
            // v35 = .primitive
            v34 = v35;
        }
        do {
            for (let v39 = 0; v39 < 6; v39++) {
            }
            const v43 = v22 + 1;
            // v43 = .primitive
            v22 = v43;
        } while (v22 < 8);
        let v45 = 0;
        const v47 = v26(13.37,"boolean",Int32Array,"boolean",v17,8,v22,v45,v16);
        // v47 = .unknown
    }
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v53 = v52;
const v54 = v15(v53);
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
