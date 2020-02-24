function main() {
function v1(v2,v3) {
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
            } while (v17 < 7);
            let v21 = 0;
            const v25 = v14 + 1;
            // v25 = .primitive
            v14 = v25;
        } while (v14 < 8);
    }
    const v26 = v10 + 1;
    // v26 = .primitive
    v10 = v26;
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v30 = v29;
const v31 = v1(v30);
// v31 = .unknown
const v32 = v1();
// v32 = .unknown
const v33 = gc();
// v33 = .undefined
}
%NeverOptimizeFunction(main);
main();
