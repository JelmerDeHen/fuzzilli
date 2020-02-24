function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        const v10 = ["boolean",13.37];
        // v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v11 = v10[1024];
        // v11 = .unknown
        let v14 = 0;
        const v15 = v11 - 1;
        // v15 = .primitive
        const v16 = v14 + 1;
        // v16 = .primitive
        v14 = v16;
        let v18 = 0;
        do {
            let v20 = v3;
            for (const v22 in "boolean") {
            }
            const v23 = v18 + 1;
            // v23 = .primitive
            v18 = v23;
        } while (v18 < 8);
    }
}
const v24 = [13.37];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v25 = v24;
const v26 = v1(v25);
// v26 = .unknown
const v27 = v1(13.37);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
