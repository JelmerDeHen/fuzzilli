function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v10 = v3;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                for (const v13 in "boolean") {
                }
                v10 = v11;
            } while (v10 < 7);
            const v14 = v8 + 1;
            // v14 = .primitive
            v8 = v14;
        } while (v8 < 8);
    }
}
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v16 = v15;
const v17 = v1(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
