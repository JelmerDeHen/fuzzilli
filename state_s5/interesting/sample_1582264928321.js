function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            while (v10 < v7) {
                const v11 = v10 % 9;
                // v11 = .number
                const v12 = v11 + 1;
                // v12 = .primitive
                v10 = v12;
            }
            const v13 = v7 + 1;
            // v13 = .primitive
            v7 = v13;
        } while (v7 < 8);
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = v15;
const v17 = v0(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
