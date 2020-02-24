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
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v16 = v15;
const v17 = v0(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
