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
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v20 = v19;
const v21 = v4(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
