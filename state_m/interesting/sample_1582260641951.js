function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            for (let v11 = 0; v11 < 4; v11++) {
                const v12 = v11 / v11;
                // v12 = .number
            }
            const v13 = v7 + 1;
            // v13 = .primitive
            v7 = v13;
        } while (v7 < 8);
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v16 = v15;
const v17 = v0(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
