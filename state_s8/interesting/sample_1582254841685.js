function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                v13 = v14;
            } while (v13 < 7);
            const v18 = {constructor:"symbol",length:9007199254740993};
            // v18 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
            const v21 = [13.37,13.37,13.37];
            // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v22 = [];
            // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v23 = v21[Function];
            // v23 = .unknown
            try {
                const v24 = v23(v22,v18);
                // v24 = .unknown
            } catch(v25) {
            }
            let v26 = 0;
            const v27 = v10 + 1;
            // v27 = .primitive
            v10 = v27;
        } while (v10 < 8);
    }
    const v28 = v6 + 1;
    // v28 = .primitive
    return gc;
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v31 = v30;
const v32 = v1(v31);
// v32 = .unknown
const v33 = v1();
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
