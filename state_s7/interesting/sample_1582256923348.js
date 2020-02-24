function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v11 = 0;
        let v12 = 0;
        const v16 = "object" instanceof gc;
        // v16 = .boolean
        let v18 = 0;
        do {
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 7);
            let v25 = 0;
            const v26 = v18 + 1;
            // v26 = .primitive
            v18 = v26;
        } while (v18 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
