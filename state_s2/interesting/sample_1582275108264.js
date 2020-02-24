function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v11 = 0;
            while (v11 < 3) {
                const v12 = v11 + 1;
                // v12 = .primitive
                v11 = v12;
            }
            let v13 = 2947655073;
            const v14 = v13 % v4;
            // v14 = .number
            const v15 = v14 || v0;
            // v15 = .boolean
            const v16 = v7 + 1;
            // v16 = .primitive
            v7 = v16;
        } while (v7 < 8);
    }
}
const v17 = [v0];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
