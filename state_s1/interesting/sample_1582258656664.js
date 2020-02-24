function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            do {
                const v15 = v14 * 0;
                // v15 = .number
                const v16 = v14 + 1;
                // v16 = .primitive
                v14 = v16;
            } while (v14 < 4);
            const v17 = v11 + 1;
            // v17 = .primitive
            v11 = v17;
        } while (v11 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v20 = v19;
const v21 = v4(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
