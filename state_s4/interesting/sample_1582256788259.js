function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        const v10 = ["boolean",13.37];
        // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v25 = v24;
const v26 = v1(v25);
// v26 = .unknown
const v27 = v1(13.37);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();