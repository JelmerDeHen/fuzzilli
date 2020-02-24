function main() {
function v0(v1,v2) {
    let v6 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            try {
                let v13 = 0;
                do {
                    const v14 = v13 + 1;
                    // v14 = .primitive
                    v13 = v14;
                } while (v13 < 7);
            } catch(v15) {
                let v18 = 0;
                while (v18 == 10) {
                }
            }
            const v19 = v10 + 1;
            // v19 = .primitive
            v10 = v19;
        } while (v10 <= 8);
    }
    const v20 = v6 + 1;
    // v20 = .primitive
    v6 = v20;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
