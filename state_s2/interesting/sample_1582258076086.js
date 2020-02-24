function main() {
function v6(v7,v8) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
            } while (v17 < 7);
            const v19 = parseFloat(v11);
            // v19 = .float
            const v20 = v19 + v19;
            // v20 = .primitive
            const v21 = v14 + 1;
            // v21 = .primitive
            v14 = v21;
        } while (v14 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v24 = v23;
const v25 = v6(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
