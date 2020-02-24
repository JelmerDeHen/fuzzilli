function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                let v9 = 0;
                do {
                    const v10 = v9 + 1;
                    // v10 = .primitive
                    v9 = v10;
                } while (v9 < v4);
            } catch(v11) {
                let v14 = 0;
                while (v14 == 10) {
                }
            }
            const v15 = v7 + 1;
            // v15 = .primitive
            v7 = v15;
        } while (v7 <= 8);
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
