function main() {
let v3 = 0;
let v6 = 0;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v16 = v11;
            while (v16 < 9) {
                const v17 = v16 % 9;
                // v17 = .number
                const v18 = v17 + 1;
                // v18 = .primitive
                v16 = v18;
            }
            const v19 = v14 + 1;
            // v19 = .primitive
            v14 = v19;
        } while (v14 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v22 = v21;
const v23 = v7(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
