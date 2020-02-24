function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = [v1,v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,471091797,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = v2.pop();
// v12 = .unknown
function v13(v14,v15) {
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            try {
                let v29 = 0;
                do {
                    const v30 = v29 + 1;
                    // v30 = .primitive
                    v29 = v30;
                } while (v29 < 7);
            } catch(v31) {
                let v34 = -2308928701;
                function v38(v39,v40,v41,v42) {
                }
            }
            const v43 = v26 + 1;
            // v43 = .primitive
            v26 = v43;
        } while (v26 < 8);
    }
    const v44 = v22 + 1;
    // v44 = .primitive
    v22 = v44;
}
const v47 = v13();
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
