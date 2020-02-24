function main() {
function v1(v2,v3) {
    let v7 = 0;
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            try {
                let v14 = 0;
                do {
                    const v15 = v14 + 1;
                    // v15 = .primitive
                    v14 = v15;
                } while (v14 < 7);
            } catch(v16) {
                const v17 = [];
                // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            }
            const v23 = v11 + 1;
            // v23 = .primitive
            v11 = v23;
        } while (v11 < 8);
    }
    const v24 = v7 + 1;
    // v24 = .primitive
    v7 = v24;
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v29 = v28;
const v30 = v1(v29);
// v30 = .unknown
const v31 = v1(1024,4.0);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
