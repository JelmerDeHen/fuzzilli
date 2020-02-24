function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            while (v10 < 5) {
                const v11 = v10 + 1;
                // v11 = .primitive
                const v12 = v11 / v11;
                // v12 = .number
                const v13 = 0 - v12;
                // v13 = .number
                v10 = v11;
                let v16 = 0;
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
            }
            const v18 = v7 + 1;
            // v18 = .primitive
            v7 = v18;
        } while (v7 <= 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
