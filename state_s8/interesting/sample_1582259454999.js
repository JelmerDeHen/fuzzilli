function main() {
function v1(v2,v3) {
    let v9 = 0;
    let v12 = 0;
    do {
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            // v16 = .primitive
            const v18 = [1337];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v19 = v18;
            const v21 = v19.every(gc);
            // v21 = .boolean
            for (const v28 in "object") {
            }
            v15 = v16;
        } while (v15 < 7);
        const v32 = v12 + 1;
        // v32 = .primitive
        v12 = v32;
    } while (v12 < 8);
    const v33 = v9 + 1;
    // v33 = .primitive
    v9 = v33;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v1(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();