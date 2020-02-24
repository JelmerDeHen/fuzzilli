function main() {
function v1(v2,v3) {
    let v8 = 0;
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
            } while (v15 < 7);
            let v18 = 0;
            const v19 = v12 + 1;
            // v19 = .primitive
            v12 = v19;
        } while (v12 < 8);
    }
    const v20 = v8 + 1;
    // v20 = .primitive
    v8 = v20;
    for (const v22 in "object") {
    }
    return 928271515;
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v26 = v25;
const v27 = v1(v26);
// v27 = .unknown
const v28 = v1(1024,4.0);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
