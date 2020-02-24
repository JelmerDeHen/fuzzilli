function main() {
function v3(v4,v5) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            do {
                const v17 = v16 / 0;
                // v17 = .number
                const v18 = v16 + 1;
                // v18 = .primitive
                v16 = v18;
            } while (v16 < 4);
            const v19 = v13 + 1;
            // v19 = .primitive
            v13 = v19;
        } while (v13 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
