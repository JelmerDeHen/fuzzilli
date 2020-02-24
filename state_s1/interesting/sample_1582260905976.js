function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        function v11(v12,v13) {
            const v14 = v9 * v9;
            // v14 = .number
            let v17 = 0;
            const v21 = v17 + 1;
            // v21 = .primitive
            v17 = v21;
            const v22 = RegExp[-1];
            // v22 = .unknown
        }
        const v23 = v11();
        // v23 = .unknown
        let v26 = 0;
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
        const v28 = v9 + 1;
        // v28 = .primitive
        v9 = v28;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
