function main() {
function v0(v1,v2) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            do {
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
            } while (v16 < 7);
            let v20 = 0;
            const v24 = v13 + 1;
            // v24 = .primitive
            v13 = v24;
        } while (v13 < 8);
    }
    const v25 = v9 + 1;
    // v25 = .primitive
    v9 = v25;
    for (const v27 in "object") {
        Number.d = 13.37;
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
const v34 = v0();
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
