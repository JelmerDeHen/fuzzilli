function main() {
function v1(v2,v3) {
    let v7 = 1;
    do {
        let v9 = -1155643050;
        while (v9 < 9) {
            const v10 = v9 % 9;
            // v10 = .number
            const v11 = v10 + 1;
            // v11 = .primitive
            function v12(v13,v14,v15,...v16) {
                return v10;
            }
            v9 = v11;
        }
        const v17 = v7 + 1;
        // v17 = .primitive
        v7 = v17;
    } while (v7 < 8);
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v20 = v19;
const v21 = v1(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
