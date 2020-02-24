function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v4(v5,v6) {
    let v19 = 0;
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            let v26 = 0;
            do {
                const v27 = v26 + 1;
                // v27 = .primitive
                const v34 = 8 / v26;
                // v34 = .number
                v26 = v27;
            } while (v26 < 7);
            const v38 = v23 + 1;
            // v38 = .primitive
            v23 = v38;
        } while (v23 < 8);
    }
    const v39 = v19 + 1;
    // v39 = .primitive
    v19 = v39;
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v43 = v42;
const v44 = v4(v43);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
